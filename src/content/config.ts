import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: (ctx) =>
      docsSchema()(ctx).extend({
        // Add a new optional field to the schema.
        category: z.string().optional(),
        source: z.string().optional(),
        original: z.string().optional(),
        attrs: z
          .array(
            z.object({
              key: z.string(),
              value: z.string()
            })
          )
          .optional()
      })
  })
};
