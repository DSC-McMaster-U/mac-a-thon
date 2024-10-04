import createImageUrlBuilder from '@sanity/image-url';
import { client } from './client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = createImageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
