import Projects from "@/components/Projects";
import ClientSlide from "./_components/ClientSlide";
import ConnectSection from "./_components/ConnectSection";

import { Project } from "../../lib/types";
import { sanityClient } from "../../sanity/lib/client";
import Services from "./_components/Services";
import ScrollMarquee from "./_components/ScrollMarquee";

async function getProjects(): Promise<Project[]> {
  try {
    const projects = await sanityClient.fetch<Project[]>({
      query: `
    *[_type == 'project'] | order(orderRank) {
      _id,
      title,
      description,
      subtitle,
      service,
      industry,
      mainImage {
    type,
    image {
      asset->{url, metadata}
    },
    video{
      asset->{url, metadata}
    },
    alt
  },
      categories[]->{
        title,
      },
      slug{
      current
      },
      images[] {
        asset->{url}
      }
    }
`,
      config: { cache: "no-cache" },
    });
    return projects ?? [];
  } catch (error) {
    console.error("Failed to fetch projects from Sanity:", error);
    return [];
  }
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <div className=" bg-mydark flex justify-center md:items-center overscroll-x-none overflow-x-hidden ">
        <div className="max-w-[1324px] mx-auto md:mt-[167px] sm:px-[16px] 2xl:px-0 pt-[145px] md:pt-[90px]">
          <div className="flex justify-center ml-8">
            <img
              src="/digital-artist.svg"
              alt="digital architect"
              className=" md:hidden mb-4"
            />
          </div>
          <div className="relative w-[80%] mx-auto animate-fade-up animate-once animate-duration-600 animate-ease-in-out delay-500">
          

            <img
              src="/mic.svg"
              alt="mic"
              className="absolute sm:right-[13rem] lg:right-[19.5rem] top-[-3.3rem] lg:top-[-5.2rem] w-14 md:w-auto hidden lg:block  "
            />
            <img
              src="/digital-artist.svg"
              alt="digital architect"
              className="hidden md:block absolute right-[8.5rem] top-[-4rem]"
            />
            <h1 className="text-center text-5xl leading-[0.90] md:text-[90px] text-primary font-baseNeue font-black  md:leading-[80px]  ">
              <span className="relative">
                <img
                  src="/mic.svg"
                  alt="mic"
                  className="absolute right-[11.8rem] md:right-[12rem] top-[-2.8rem]  w-[63px] h-[61px] md:w-auto lg:hidden"
                />
                ARNOB
              </span>{" "}
              CAN DESIGN <span className="relative">  <img
              src="/star.svg"
              alt="star"
              className="w-[45px] h-[45px] absolute left-[-2.7rem] top-[2.5rem]  2xl:left-[-2.7rem] 2xl:top-[3.5rem] animate-spin-slow   hidden lg:block"
            />FOR </span> YOU
            </h1>
          </div>
          <div className="mt-[46px] md:mt-[68px] md:w-[40%] mx-auto animate-fade-up animate-delay-500 animate-duration-600 animate-ease-in-out ">
            <p className="text-mygray uppercase text-center text-xl leading-[1]   md:text-[32px] md:leading-[34px] tracking-wide font-normal  ">
              HELPING <br /> <span className="text-primary">WEB3.0</span>{" "}
              STARTUPS <br /> THROUGH FUTURE-PROOF TIMELESS DESIGN <br />
              STRATEGY.
            </p>
          </div>

          <div className=" bg-mydark pt-[90px]  md:pt-[148px]">
            <ClientSlide />
          </div>
        </div>
      </div>

      <div className="pt-[109px] md:pt-[241px] bg-mydark  ">
        <Projects projects={projects} />
      </div>

      <div className="md:min-h-screen bg-mydark pt-[130px] md:pt-[278px]   ">
        <Services />
      </div>
      <div className=" bg-mydark pt-[50px] md:pt-[60px]   ">
        <ScrollMarquee />
      </div>

      <div className=" bg-mydark pt-[126px] pb-[107px] md:pt-[159px] md:pb-[235px] ">
        <ConnectSection />
      </div>
    </>
  );
}
