import { defineField, defineType } from "sanity";

export const sponsorSchema = defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Sponsor name is required'),
    }),
    defineField({
      name: 'logo',
      title: 'Sponsor Logo',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping for better focus
      },
      validation: (Rule) => Rule.required().error('Sponsor logo is required'),
    }),
    defineField({
      name: 'website',
      title: 'Sponsor Website',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).error('Valid URL required'),
    }),
  ],
})