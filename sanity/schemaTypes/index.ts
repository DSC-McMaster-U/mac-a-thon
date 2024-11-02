import { type SchemaTypeDefinition } from 'sanity'
import { faqSchema } from './faq'
import { sponsorSchema } from './sponsor'
import { statisticSchema } from './statistic'
import {EventSchema} from './events'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faqSchema, sponsorSchema, statisticSchema, EventSchema],
}