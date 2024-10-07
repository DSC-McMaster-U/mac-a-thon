import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const isProd = process.env.NODE_ENV === 'production';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: isProd, // Use CDN in production only
})
