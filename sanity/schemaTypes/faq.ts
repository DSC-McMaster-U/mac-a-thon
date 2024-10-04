import { defineField, defineType } from 'sanity'

export const faqSchema = defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({
        name: 'question',
        title: 'Question',
        type: 'string',
        description: 'The question being asked (e.g. "What is the the best club?")',
        validation: (Rule) => Rule.required().error('Question is required'),
    }),
    defineField({
        name: 'answer',
        title: 'Answer',
        type: 'text',
        description: 'The answer to the question (e.g. "GDSC is the best club!")',
        validation: (Rule) => Rule.required().error('Answer is required'),
    }),
  ],
})
