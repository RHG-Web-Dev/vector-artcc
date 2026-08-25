import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = true;

export const GET: APIRoute = async () => {
  const entries = await getCollection('content');

  const results = entries
    .filter((entry) => !entry.data.hidden && !entry.id.split('/').at(-1)?.startsWith('_'))
    .filter((entry) => entry.id.split('/').length === 2)
    .map((entry) => {
      const [section, filename] = entry.id.split('/');
      const slug = filename.replace(/\.(md|mdx)$/, '');

      return {
        title: entry.data.title,
        description: entry.data.description,
        section,
        slug,
        url: `/${section}/${slug}`,
        content: entry.body ?? '',
      };
    });

  return new Response(JSON.stringify(results), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
