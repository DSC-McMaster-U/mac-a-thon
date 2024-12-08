import { defineField, defineType } from 'sanity'

export const statisticSchema = defineType({
    title: 'Statistic',
    name: 'statistic',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the statistic',
            validation: (Rule) => Rule.required().error('Title is required'),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'The description of the statistic',
            validation: (Rule) => Rule.required().error('Description is required'),
        }),
        defineField({
            name: 'value',
            title: 'Value',
            type: 'string',
            description: 'The value of the statistic',
            validation: (Rule) => Rule.required().error('Value is required'),
        }),
    ],
})
