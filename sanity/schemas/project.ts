import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(80)
          .error("Every project needs a title (max 80 characters)."),
    }),
    defineField({
      name: "mainImage",
      title: "Main media",
      type: "object",
      description:
        "The cover shown on the homepage project grid. Pick a media type, then upload the matching file.",
      validation: (Rule) =>
        Rule.required().error(
          "Please add main media — without it the project card on the homepage will be empty."
        ),
      fields: [
        {
          name: "type",
          type: "string",
          title: "Media Type",
          initialValue: "image",
          options: {
            list: [
              { title: "Image Upload", value: "image" },
              { title: "Video Upload", value: "video" },
            ],
            layout: "radio",
          },
          validation: (Rule) =>
            Rule.required().error("Choose whether the main media is an image or a video."),
        },
        {
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
          hidden: ({ parent }) => parent?.type !== "image",
          validation: (Rule) =>
            Rule.custom((value, context) => {
              const parent = context.parent as { type?: string } | undefined;
              if (parent?.type === "image" && !value) {
                return 'You selected "Image Upload" — please upload an image (or switch the media type).';
              }
              return true;
            }),
        },
        {
          name: "video",
          title: "Video",
          type: "file",
          options: {
            accept: "video/*",
          },
          hidden: ({ parent }) => parent?.type !== "video",
          validation: (Rule) =>
            Rule.custom((value, context) => {
              const parent = context.parent as { type?: string } | undefined;
              if (parent?.type === "video" && !value) {
                return 'You selected "Video Upload" — please upload a video (or switch the media type).';
              }
              return true;
            }),
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
          description: "Short description of the media for accessibility and SEO.",
        },
      ],
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      description: "Shown under the project title on the homepage grid.",
      validation: (Rule) =>
        Rule.required().error("Please add a subtitle — it is shown under the title on the homepage."),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "Intro paragraph shown at the top of the project page.",
      validation: (Rule) =>
        Rule.warning("Consider adding a description — the project page shows it under the title."),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      description:
        "Used by the filter buttons on the homepage. A project without categories only appears under \"All\".",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) =>
        Rule.integer()
          .min(1900)
          .max(2100)
          .error("Please enter a valid 4-digit year (e.g. 2024)."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        'The link for this project (e.g. /project/my-project). Click "Generate" to create it from the title.',
      validation: (Rule) =>
        Rule.required().error(
          'The project needs a slug — click the "Generate" button to create one from the title.'
        ),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "media",
      type: "array",
      title: "Media",
      description:
        "The gallery shown on the project page. For each item pick a media type, then upload the matching file.",
      of: [
        {
          type: "object",
          preview: {
            select: {
              type: "type",
              media: "photo",
            },
            prepare({ type, media }: { type?: string; media?: any }) {
              return {
                title: type === "video" ? "Video" : "Photo",
                media,
              };
            },
          },
          fields: [
            {
              name: "type",
              type: "string",
              title: "Media Type",
              initialValue: "photo",
              options: {
                list: [
                  { title: "Photo", value: "photo" },
                  { title: "Video", value: "video" },
                ],
                layout: "radio",
              },
              validation: (Rule) =>
                Rule.required().error("Choose whether this item is a photo or a video."),
            },
            {
              name: "photo",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true,
              },
              hidden: ({ parent }) => parent?.type !== "photo",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as { type?: string } | undefined;
                  if (parent?.type === "photo" && !value) {
                    return 'You selected "Photo" — please upload a photo (or switch the media type).';
                  }
                  return true;
                }),
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative Text",
                  description: "Short description of the photo for accessibility and SEO.",
                },
              ],
            },
            {
              name: "video",
              title: "Video",
              type: "file",
              options: {
                accept: "video/*",
              },
              hidden: ({ parent }) => parent?.type !== "video",
              validation: (Rule) =>
                Rule.custom((value, context) => {
                  const parent = context.parent as { type?: string } | undefined;
                  if (parent?.type === "video" && !value) {
                    return 'You selected "Video" — please upload a video (or switch the media type).';
                  }
                  return true;
                }),
            },
          ],
        },
      ],
    }),
  ],
});
