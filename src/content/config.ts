import { defineCollection, z } from "astro:content";

const cases = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    location: z.string().optional(),
    year: z.number().optional(),         // <- number, not string
    cover: z.string().optional(),
    category: z.enum(["new-build", "renovation", "extension"]).optional(),
  }),
});

export const collections = { cases };
