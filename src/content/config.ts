import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    image: z.string().optional(),
    excerpt: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};