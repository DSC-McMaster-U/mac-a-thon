import { defineField, defineType } from 'sanity'

export const generalInfoSchema = defineType({
    title: 'General Info',
    name: 'generalInfo',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'The title of the document',
            validation: (Rule) => Rule.required().error('Title is required'),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'The description of the document',
            validation: (Rule) => Rule.required().error('Description is required'),
        }),
        defineField({
            name: 'startDate',
            title: 'Start Date',
            type: 'datetime',
            description: 'The start date of the event',
            validation: (Rule) => Rule.required().error('Start Date is required'),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date',
            type: 'datetime',
            description: 'The end date of the event',
            validation: (Rule) => Rule.required().error('End Date is required'),
        }),
        defineField({
            name: 'locationType',
            title: 'Location Type',
            type: 'string',
            description: 'The type of location',
            validation: (Rule) => Rule.required().error('Location Type is required'),
            options: {
                list: ['virtual', 'in-person', 'hybrid'],
            },
        }),
        defineField({
            name: 'applicationStatus',
            title: 'Application Status',
            type: 'string',
            description: 'The status of the application',
            validation: (Rule) => Rule.required().error('Application Status is required'),
            options: {
                list: ['open', 'closed'],
            },
        }),
    ],
})
