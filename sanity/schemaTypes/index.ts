import { type SchemaTypeDefinition } from 'sanity'
import { faqSchema } from '@/sanity/schemaTypes/faq'
import { sponsorSchema } from '@/sanity/schemaTypes/sponsor'
import { statisticSchema } from './statistic'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faqSchema, sponsorSchema, statisticSchema],
}
