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
      description: 'The name of the sponsor (e.g. "Google", "Microsoft")',
      validation: (Rule) => Rule.required().error('Sponsor name is required'),
    }),
    defineField({
      name: 'logo',
      title: 'Sponsor Logo',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping for better focus
      },
      description: 'The logo of the sponsor (e.g. "Google", "Microsoft")',
      validation: (Rule) => Rule.required().error('Sponsor logo is required'),
    }),
    defineField({
      name: 'website',
      title: 'Sponsor Website',
      type: 'url',
      description: 'The website of the sponsor (e.g. "https://www.google.com", "https://www.microsoft.com")',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).error('Valid URL required'),
    }),
  ],
})