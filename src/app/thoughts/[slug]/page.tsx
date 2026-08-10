import { format, parseISO } from "date-fns";
import { sanityClient } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

function formatPublishedAt(publishedAt?: string) {
  if (!publishedAt) return null;
  try {
    return format(parseISO(publishedAt), "MMMM d, yyyy");
  } catch {
    return null;
  }
}

async function getPost(postSlug: string) {
  try {
    const posts = await sanityClient.fetch<any>({
      query: `
    *[_type == "post" && slug.current == $postSlug][0] {
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
      params: { postSlug },
    });
    return posts ?? null;
  } catch (error) {
    console.error("Failed to fetch post from Sanity:", error);
    return null;
  }
}

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
  const post = await getPost(params.slug);

  if (!post?._id) {
    notFound();
  }

  const publishedDate = formatPublishedAt(post.publishedAt);

  return (
    <div className="min-h-screen bg-mydark font-aeonik overflow-x-hidden max-w-[784px] px-10 2xl:px-0  mx-auto mb-[271px]">
      <div className="mt-32 text-mywhite  mb-[38px]">
        {publishedDate && (
          <p className="font-normal text-[11px] lg:text-sm mb-[16px] text-[#717F8E]">
            {publishedDate}
          </p>
        )}
        <h1 className="text-[36px] lg:text-[40px]  font-medium">{post.title}</h1>
      </div>

      {post.mainImage?.asset?.url && (
        <div className="mb-[65px] lg:mb-[98px]">
          <img
            src={post.mainImage.asset.url}
            alt={post.title || "main-image"}
            className="w-[784px] h-[174px] object-cover rounded-[12px]"
          />
        </div>
      )}

      <div className="mb-[86px]">
        {post.body ? (
          <PortableText value={post.body} />
        ) : (
          <p className="text-[#717F8E]">This post has no content yet.</p>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;
