import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The headline of the blog post.',
      validation: (Rule) =>
        Rule.required().error('Every post needs a title before it can be published.'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'The link for this post (e.g. /thoughts/my-post). Click "Generate" to create it from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error(
          'The post needs a slug — click the "Generate" button to create one from the title.'
        ),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      description: 'The cover image shown on the blog list and at the top of the post.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Short description of the image for accessibility and SEO.',
        },
      ],
      validation: (Rule) =>
        Rule.required().warning(
          'Posts look much better with a cover image — consider adding one.'
        ),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'The date shown on the post. Defaults to today.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) =>
        Rule.required().error('Please set a publish date — it is shown on the blog page.'),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) =>
        Rule.required().warning('The post has no content yet — readers will see an empty page.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
