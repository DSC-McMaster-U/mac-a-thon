import { defineField, defineType } from 'sanity'

export const statisticSchema = defineType({
  name: 'statistic',
  title: 'Statistic',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the statistic (e.g. "Rounds Played", "Courses Visited")',
      validation: (Rule) => Rule.required().error('Stat title is required'),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'number',
      description: 'Numerical value for this statistic (e.g. 25, 100, etc.)',
      validation: (Rule) => Rule.required().error('Stat value is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the statistic (e.g. "Performance", "Participation")',
      options: {
        list: [
          { title: 'Performance', value: 'performance' },
          { title: 'Participation', value: 'participation' },
          { title: 'General', value: 'general' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the statistic (e.g. "Number of rounds played", "Number of courses visited")',
    }),
  ],
})
