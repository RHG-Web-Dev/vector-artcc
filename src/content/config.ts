import { defineCollection, z } from 'astro:content';

const aviationSchema = z.object({
	title: z.string(),
	description: z.string(),
	updated: z.string().optional(),
	featured: z.boolean().default(false),
	order: z.number().default(999),
	hidden: z.boolean().default(false),
});

export const collections = {
	learn: defineCollection({ schema: aviationSchema }),
	reference: defineCollection({ schema: aviationSchema }),
	kmem: defineCollection({ schema: aviationSchema }),
	training: defineCollection({ schema: aviationSchema }),
	resources: defineCollection({ schema: aviationSchema }),
	tools: defineCollection({ schema: aviationSchema }),
};
