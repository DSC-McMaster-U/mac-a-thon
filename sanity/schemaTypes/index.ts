import { type SchemaTypeDefinition } from 'sanity'
import { eventSchema } from './event'
import { newsletterSchema } from './newsletter'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventSchema, newsletterSchema],
}
