import { type SchemaTypeDefinition } from 'sanity'
import { faqSchema } from './faq'
import { sponsorSchema } from './sponsor'
import { generalInfoSchema } from './generalInfo'
import { aboutSchema } from './about'
import { statisticSchema } from './statistic'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [generalInfoSchema, faqSchema, sponsorSchema, aboutSchema, statisticSchema],
}