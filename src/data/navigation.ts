import { getCollection } from 'astro:content';

const collections = [
	'learn',
	'reference',
	'kmem',
	'training',
	'resources',
] as const;

export type SectionName = (typeof collections)[number];

export interface Section {
	key: SectionName;
	title: string;
	description: string;
	order: number;
	hidden: boolean;
}

export interface SectionPage {
	id: string;
	slug: string;
	label: string;
	description: string;
	href: string;
	category?: string;
	updated?: Date;
	featured: boolean;
	order: number;
	hidden: boolean;
}

/**
 * Converts a collection name into a readable section title.
 *
 * This is only a fallback/default.
 * Individual content pages can still provide their own content.
 */
function formatSectionTitle(section: SectionName): string {
	return section
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (character) => character.toUpperCase());
}

/**
 * Gets all sections.
 *
 * Sections are derived from the Astro collections.
 */
export async function getSections(): Promise<Section[]> {
	const sections = await Promise.all(
		collections.map(async (key) => {
			const pages = await getCollection(key);

			const visiblePages = pages.filter((page) => !page.data.hidden);

			const firstPage = visiblePages[0];

			return {
				key,

				title: formatSectionTitle(key),

				description: `${formatSectionTitle(key)} reference material.`,

				order: firstPage?.data.order ?? 999,

				hidden: false,
			};
		}),
	);

	return sections.sort((a, b) => {
		return a.order - b.order;
	});
}

/**
 * Gets information about one section.
 */
export async function getSectionInfo(
	section: SectionName,
): Promise<Omit<Section, 'key'>> {
	const pages = await getCollection(section);

	const visiblePages = pages.filter((page) => !page.data.hidden);

	const firstPage = visiblePages[0];

	return {
		title: formatSectionTitle(section),

		description: `${formatSectionTitle(section)} reference material.`,

		order: firstPage?.data.order ?? 999,

		hidden: false,
	};
}

/**
 * Gets all visible pages in a section.
 */
export async function getSectionPages(
	section: SectionName,
): Promise<SectionPage[]> {
	const entries = await getCollection(section);

	return entries
		.filter((entry) => !entry.data.hidden)
		.sort((a, b) => {
			const orderDifference = (a.data.order ?? 999) - (b.data.order ?? 999);

			if (orderDifference !== 0) {
				return orderDifference;
			}

			return a.data.title.localeCompare(b.data.title);
		})
		.map((entry) => {
			const slug = entry.id.replace(/\.(md|mdx)$/, '');

			return {
				id: entry.id,

				slug,

				label: entry.data.title,

				description: entry.data.description ?? '',

				href: `/${section}/${slug}`,

				updated: entry.data.updated,

				featured: entry.data.featured ?? false,

				order: entry.data.order ?? 999,

				hidden: entry.data.hidden ?? false,
			};
		});
}

/**
 * Gets every visible page across every section.
 */
export async function getAllPages(): Promise<SectionPage[]> {
	const sectionPages = await Promise.all(
		collections.map((section) => getSectionPages(section)),
	);

	return sectionPages.flat();
}

/**
 * Finds a specific page.
 */
export async function getPage(
	section: SectionName,
	slug: string,
): Promise<SectionPage | undefined> {
	const pages = await getSectionPages(section);

	return pages.find((page) => page.slug === slug);
}
