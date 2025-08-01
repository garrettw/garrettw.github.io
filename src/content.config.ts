import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}', }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}', }),
		schema: rssSchema.extend({
			status: z.enum(['published', 'draft', 'archived']).default('draft'),
			updatedDate: z.coerce.date().optional(),
		}),
	}),
};
