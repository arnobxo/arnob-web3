import BlogSection from "@/app/thoughts/_components/BlogSection";

import { sanityClient } from "../../../sanity/lib/client";

async function getPosts() {
  try {
    const posts = await sanityClient.fetch({
      query: `
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author-> {
        _id,
        name,
      },
      mainImage {
        asset->{url, metadata}
      },
      categories[]->{
        title,
      },
      publishedAt,
      body,
    }
`,
      config: { cache: "no-cache" },
    });
    return posts ?? [];
  } catch (error) {
    console.error("Failed to fetch posts from Sanity:", error);
    return [];
  }
}

const Thoughts = async () => {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-mydark flex   flex-col overflow-x-hidden max-w-[1324px] px-[16px] 2xl:px-0 mx-auto">
      <div className="  leading-tight  grid lg:grid-cols-2 pt-[90px] mt-[50px] lg:mt-[123px] gap-[50px] lg:gap-[228px] ">
        <div>
          <h1 className="text-[36px] lg:text-[52px] font-aeonik font-light  leading-[3.7rem] whitespace-nowrap hidden lg:block">
            Through a Designer's <br /> Lens, My Thoughts <br /> On Tomorrow.
          </h1>
          <h1 className="text-[36px] lg:text-[52px] font-aeonik font-light   lg:hidden">
            Through a Designer's  Lens, My Thoughts On Tomorrow.
          </h1>
        </div>
        <div className=" lg:mt-auto  font-aeonik font-light text-[17px] leading-relaxed text-[#A7B5C4] ">
          <p className="text-left hidden lg:block">
            This Is My Personal Design Odyssey Through The <br /> Web3 Universe. Join
            Me As I Share My Unique <br /> Perspective and Experiences As A Graphic <br />
            Designer Embracing the Decentralized Future.
          </p>

          <p className="text-left lg:hidden leading-[1.75]">
            This Is My Personal Design Odyssey Through The Web3 Universe. Join
            Me As I Share My Unique Perspective and Experiences As A Graphic
            Designer Embracing the Decentralized Future.
          </p>
        </div>
      </div>

      <div className="border  w-full border-b border-[#414C56]/50 mt-[50px] lg:mt-[70px]"></div>

      <BlogSection posts={posts} />
    </div>
  );
};

export default Thoughts;
