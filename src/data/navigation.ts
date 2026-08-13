import { getCollection } from 'astro:content';

export interface Section {
	key: string;
	title: string;
	description: string;
	order: number;
	hidden: boolean;
}

export interface SectionPage {
	id: string;
	section: string;
	slug: string;
	label: string;
	description: string;
	href: string;
	category?: string;
	updated?: string;
	featured: boolean;
	order: number;
	hidden: boolean;
}

/*
 * Get the section/category from a content entry.
 *
 * Example:
 *
 * learn/airspace.md
 *       ^
 *       section = learn
 */
function getSectionFromId(id: string): string {
	return id.split('/')[0];
}

/*
 * Get the filename from a content entry.
 *
 * Example:
 *
 * learn/airspace.md
 *       ^^^^^^^^^^^
 */
function getFilename(id: string): string {
	return id.split('/').pop() ?? '';
}

/*
 * Convert a content filename into a URL slug.
 *
 * airspace.md -> airspace
 * craft.mdx   -> craft
 */
function getSlugFromId(id: string): string {
	return getFilename(id).replace(/\.(md|mdx)$/, '');
}

/*
 * Metadata files begin with "_".
 *
 * Currently:
 *
 * _section.md
 *
 * is used to define section information.
 *
 * Metadata files should NEVER become public pages.
 */
function isMetadataEntry(id: string): boolean {
	return getFilename(id).startsWith('_');
}

/*
 * Get all sections dynamically.
 *
 * Sections are discovered from:
 *
 * src/content/<section>/_section.md
 */
export async function getSections(): Promise<Section[]> {
	const entries = await getCollection('content');

	return entries
		.filter((entry) => isMetadataEntry(entry.id))
		.map((entry) => ({
			key: getSectionFromId(entry.id),

			title: entry.data.title,

			description: entry.data.description ?? '',

			order: entry.data.order ?? 999,

			hidden: entry.data.hidden ?? false,
		}))
		.filter((section) => !section.hidden)
		.sort((a, b) => {
			return a.order - b.order;
		});
}

/*
 * Get information for one section.
 */
export async function getSectionInfo(
	section: string,
): Promise<Section | undefined> {
	const sections = await getSections();

	return sections.find((item) => item.key === section);
}

/*
 * Get all pages belonging to a section.
 *
 * Sorting priority:
 *
 * 1. Featured pages
 * 2. Page order
 * 3. Alphabetical title
 */
export async function getSectionPages(section: string): Promise<SectionPage[]> {
	const entries = await getCollection('content');

	return entries
		.filter((entry) => {
			return (
				getSectionFromId(entry.id) === section &&
				!isMetadataEntry(entry.id) &&
				!entry.data.hidden
			);
		})
		.sort((a, b) => {
			/*
			 * Featured first.
			 */
			const featuredA = a.data.featured ? 1 : 0;

			const featuredB = b.data.featured ? 1 : 0;

			if (featuredA !== featuredB) {
				return featuredB - featuredA;
			}

			/*
			 * Then respect order.
			 *
			 * Missing order values become 999.
			 */
			const orderA = a.data.order ?? 999;

			const orderB = b.data.order ?? 999;

			if (orderA !== orderB) {
				return orderA - orderB;
			}

			/*
			 * Finally, alphabetical order.
			 */
			return a.data.title.localeCompare(b.data.title);
		})
		.map((entry) => {
			const slug = getSlugFromId(entry.id);

			return {
				id: entry.id,

				section,

				slug,

				label: entry.data.title,

				description: entry.data.description ?? '',

				href: `/${section}/${slug}`,

				category: entry.data.category,

				updated: entry.data.updated,

				featured: entry.data.featured ?? false,

				order: entry.data.order ?? 999,

				hidden: entry.data.hidden ?? false,
			};
		});
}

/*
 * Get every public content page.
 *
 * Metadata entries and hidden pages are excluded.
 */
export async function getAllPages(): Promise<SectionPage[]> {
	const entries = await getCollection('content');

	return entries
		.filter((entry) => {
			return !isMetadataEntry(entry.id) && !entry.data.hidden;
		})
		.map((entry) => {
			const section = getSectionFromId(entry.id);

			const slug = getSlugFromId(entry.id);

			return {
				id: entry.id,

				section,

				slug,

				label: entry.data.title,

				description: entry.data.description ?? '',

				href: `/${section}/${slug}`,

				category: entry.data.category,

				updated: entry.data.updated,

				featured: entry.data.featured ?? false,

				order: entry.data.order ?? 999,

				hidden: entry.data.hidden ?? false,
			};
		});
}
