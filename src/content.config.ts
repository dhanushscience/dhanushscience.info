import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// the CMS can save empty fields as null or ''
const image = z.string().nullish(); // e.g. /images/blog/my-photo.jpg

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    thumbnail: z.object({ light: image, dark: image }).nullish(),
    cover: image,
    coverDark: image,
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
