import { defineField, defineType } from 'sanity'

export const newEventSchema = defineType({
  name: 'newEvent',
  title: 'New Events',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'The name of the event',
        validation: (Rule) => Rule.required().error('Name of the event is required'),
    }),
    defineField({
      name: 'dateTimeRange',
      title: 'Date and Time Range',
      type: 'object',
      fields: [
        {
          name: 'start',
          title: 'Start Date and Time',
          type: 'datetime',
          description: 'When the event starts',
          validation: (Rule) => Rule.required().error('Start date and time is required'),
        },
        {
          name: 'end',
          title: 'End Date and Time',
          type: 'datetime',
          description: 'When the event ends',
          validation: (Rule) =>
            Rule.required()
              .min(Rule.valueOfField('start'))
              .error('End date and time must be after start date and time'),
        },
      ],
    }),
    defineField({
        name: 'location',
        title: 'Location',
        type: 'string',
        description: 'Where is the event happening',
        validation: (Rule) => Rule.required().error('Location is required'),
    }), 
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
        description: 'Add an event description',
        validation: (Rule) => Rule.required().error('Event description is required'),
    }),
  ],
})
