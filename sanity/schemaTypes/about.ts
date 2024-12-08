import { defineField, defineType } from 'sanity'

export const aboutSchema = defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'mission',
            title: 'Mission',
            type: 'text',
            description: 'The mission of the organization',
            validation: (Rule) => Rule.required().error('Mission is required'),
        }),
        defineField({
            name: 'vision',
            title: 'Vision',
            type: 'text',
            description: 'The vision of the organization',
            validation: (Rule) => Rule.required().error('Vision is required'),
        }),
    ],
})
