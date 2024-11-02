import { type SchemaTypeDefinition } from 'sanity'
import { faqSchema } from './faq'
import { sponsorSchema } from './sponsor'
import { statisticSchema } from './statistic'
import {newEventSchema} from './newEvents'
import {pastEventSchema} from './pastEvents'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faqSchema, sponsorSchema, statisticSchema, newEventSchema, pastEventSchema],
}