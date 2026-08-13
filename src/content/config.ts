import { defineCollection, z } from 'astro:content';

const aviationSchema = z.object({
	title: z.string(),
	description: z.string(),
	category: z.string(),
	updated: z.string().optional(),
	featured: z.boolean().default(false),
});

const learn = defineCollection({
	schema: aviationSchema,
});

const reference = defineCollection({
	schema: aviationSchema,
});

const kmem = defineCollection({
	schema: aviationSchema,
});

const training = defineCollection({
	schema: aviationSchema,
});

const resources = defineCollection({
	schema: aviationSchema,
});

export const collections = {
	learn,
	reference,
	kmem,
	training,
	resources,
};
