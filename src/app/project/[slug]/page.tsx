"use client";
import { useParams } from "next/navigation";
import { sanityClient } from "../../../../sanity/lib/client";
import { Project } from "../../../../lib/types";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import ConnectSection from "@/app/_components/ConnectSection";

const Project = () => {
  const { slug } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    const getProjectData = async () => {
      setLoading(true);
      setError(false);
      try {
        const projectData = await sanityClient.fetch<Project | null>({
          query: `
                    *[_type == 'project' && slug.current == $slug][0] {
                        _id,
                        title,
                        description,
                        service,
                        industry,
                        year,
                        mainImage{
                        asset->{url}
                        },
                        categories[]->{
                          title,
                        },
                        slug{
                        current
                        },
                        media[]{
                          photo{
                            asset->{url}
                          
                          },
                          video{
                            asset->{url}
                          
                          },
                          type
                        }
                      }
                    
                
                `,
          config: { cache: "no-cache" },
          params: { slug },
        });
        setProject(projectData?._id ? projectData : null);
      } catch (err) {
        setError(true);
        toast.error("Could not load this project. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getProjectData();
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen h-full bg-mydark flex justify-center items-center">
        <div className="pt-[145px] md:pt-[90px] text-mygray lg:max-w-6xl lg:mx-auto ">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen h-full bg-mydark flex justify-center items-center">
        <div className="pt-[145px] md:pt-[90px] text-mygray text-center lg:max-w-6xl lg:mx-auto">
          <h2 className="text-2xl font-aeonik mb-4">
            {error ? "Something went wrong" : "Project not found"}
          </h2>
          <p className="text-[#717F8E] font-aeonik font-light">
            {error
              ? "Could not load this project. Please refresh the page."
              : "This project may have been removed or the link is incorrect."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-mydark overflow-x-hidden">
      <div className="lg:pt-24 text-mygray max-w-[1624px] mx-auto px-[16px] 2xl:px-0 pt-[52px]">
        <div className="border-b pb-[55px] pt-16 border-[#414C56]/50 grid grid-cols-1 lg:grid-cols-3 max-w-[1324px] mx-auto">
          <div>
            <h2 className="font-aeonik font-semibold text-[18px] text-mygray mt-[42px] lg:mt-0 mb-[26px] lg:mb-11">
              SERVICE
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.service?.length ? (
                project.service.map((service) => (
                  <p
                    className="text-[16px] font-aeonik  font-light text-mygray"
                    key={uuidv4()}
                  >
                    {service}
                  </p>
                ))
              ) : (
                <p className="text-[16px] font-light font-aeonik text-mygray">
                  None
                </p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-aeonik font-semibold text-[16px] text-mygray mt-[42px] lg:mt-0 mb-[26px] lg:mb-11">
              INDUSTRY
            </h2>
            <div className="space-y-2 uppercase text-mygray">
              {project?.industry?.length ? (
                project.industry.map((ind) => (
                  <p
                    className="text-[16px] font-aeonik  font-light text-mygray"
                    key={uuidv4()}
                  >
                    {ind}
                  </p>
                ))
              ) : (
                <p className="text-[16px] font-aeonik  font-light text-mygray">
                  None
                </p>
              )}
            </div>
          </div>
          <div>
            <h2 className="font-aeonik font-semibold text-[18px] text-mygray mt-[42px] lg:mt-0 mb-[26px] lg:mb-11">
              YEAR
            </h2>
            <div className="space-y-2 uppercase text-mygray text-[16px] font-aeonik  font-light ">
              {project?.year || (
                <p className="text-[16px] font-light text-mygray">None</p>
              )}
            </div>
          </div>
        </div>
        <div lang="en" className="pt-[55px] max-w-[1324px] mx-auto">
          <motion.h1
            initial={{ translateY: 100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-[45px] leading-[44px] lg:text-6xl font-black font-baseNeue text-primary lg:px-0 break-words lg:w-[70%] uppercase hyphens-auto"
          >
            {project?.title}
          </motion.h1>
          <p className="lg:w-[70%] w-full mt-[34px] text-[18px] leading-[28px] font-light font-aeonik ">
            {project?.description}
          </p>
        </div>

        <div className="mt-[90px] flex flex-col w-full h-full gap-y-[6px]">
          {project?.media?.length ? (
            project.media
              .filter(
                (med) =>
                  (med.type === "photo" && med.photo?.asset?.url) ||
                  (med.type === "video" && med.video?.asset?.url)
              )
              .map((med) => (
                <motion.div
                  key={uuidv4()}
                  initial={{ translateY: 100, opacity: 0 }}
                  whileInView={{ translateY: 0, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {med.type === "photo" ? (
                    <Image
                      src={med.photo.asset.url}
                      width={1600}
                      height={848}
                      alt="project-img"
                    />
                  ) : (
                    <video
                      width={1600}
                      height={848}
                      autoPlay
                      muted
                      loop
                      className="object-cover hover:scale-100 scale-105 transition-all duration-500"
                    >
                      <source src={med.video.asset.url} type="video/mp4" />
                    </video>
                  )}
                </motion.div>
              ))
          ) : (
            <p className="text-center text-sm pt-36 text-mygray">
              No Photos Found
            </p>
          )}
        </div>
        <div className="lg:pt-60 lg:pb-40 pt-28 pb-20">
          <ConnectSection />
        </div>
      </div>
    </div>
  );
};

export default Project;
