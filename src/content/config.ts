import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const content = defineCollection({
	loader: glob({
		pattern: '**/*.{md,mdx}',
		base: './src/content',
	}),

	schema: z.object({
		title: z.string(),
		description: z.string().default(''),
		category: z.string().optional(),
		order: z.number().default(999),
		hidden: z.boolean().default(false),
		featured: z.boolean().default(false),
		updated: z.string().optional(),
	}),
});

export const collections = {
	content,
};
