export const navSections = [
	{
		label: 'Sections',
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Learn', href: '/learn' },
			{ label: 'Reference', href: '/reference' },
			// { label: 'KMEM', href: '/kmem' },
			{ label: 'Training', href: '/training' },
			// { label: 'Tools', href: '/tools' },
			{ label: 'Resources', href: '/resources' },
		],
	},
	/*{
		label: 'Learn',
		items: [
			{ label: 'Airspace', href: '/learn/airspace' },
			{ label: 'RVSM & Altitudes', href: '/learn/rvsm' },
			{ label: 'Direction of Flight', href: '/learn/direction-of-flight' },
			{ label: 'Equipment Suffixes', href: '/learn/equipment-suffixes' },
			{ label: 'Navigation', href: '/learn/navigation' },
			{ label: 'Airways', href: '/learn/airways' },
			{ label: 'Departure Procedures', href: '/learn/departure-procedures' },
		],
	},
	{
		label: 'Reference',
		items: [
			{ label: 'CRAFT', href: '/reference/craft' },
			{ label: 'IFR Clearances', href: '/reference/clearances' },
			{ label: 'Amendments', href: '/reference/amendments' },
			{ label: 'Readbacks', href: '/reference/readbacks' },
			{ label: 'Coordination', href: '/reference/coordination' },
			{ label: 'Phraseology', href: '/reference/phraseology' },
		],
	},
	{
		label: 'KMEM',
		items: [
			{ label: 'Clearance Delivery', href: '/kmem/clearance-delivery' },
			{ label: 'Ground', href: '/kmem/ground' },
			{ label: 'Local', href: '/kmem/local' },
			{ label: 'Runways', href: '/kmem/runways' },
			{ label: 'Taxiways', href: '/kmem/taxiways' },
			{ label: 'SIDs', href: '/kmem/sids' },
			{ label: 'STARs', href: '/kmem/stars' },
			{ label: 'Frequencies', href: '/kmem/frequencies' },
		],
	},
	{
		label: 'Training',
		items: [
				{ label: 'MEM Tier 2', href: '/training/tier-2' },
				{ label: 'Training Sessions', href: '/training/sessions' },
				{ label: 'Knowledge Checks', href: '/training/knowledge-checks' },
				{ label: 'Scenarios', href: '/training/scenarios' },
		],
	},
	{
		label: 'Resources',
		items: [
			{ label: 'KMEM ATCT SOP', href: '/resources/kmem-atct-sop' },
			{ label: 'ZME SOPs', href: '/resources/zme-sops' },
			{ label: 'ZME LOAs', href: '/resources/zme-loas' },
			{ label: 'ZME Reference Card', href: '/resources/zme-reference-card' },
			{ label: 'FAA 7110.65', href: '/resources/faa-7110-65' },
			{ label: 'CRC Documentation', href: '/resources/crc-documentation' },
		],
	},*/
] as const;

export const sectionSummaries = {
	learn:
		'Study airspace, altitude structure, navigation, and departure basics.',
	reference: 'Fast lookup material for controller actions and phraseology.',
	kmem: 'Airport-specific guidance for Memphis and local facility work.',
	training: 'Scenarios, sessions, and skill checks for MEM development.',
	tools: 'Utility surfaces for future calculators and builders.',
	resources: 'Primary source links and reference documents.',
} as const;

export const sectionPages = {
	learn: {
		title: 'Learn',
		description:
			'Study material for airspace structure, altitude rules, navigation, and departure basics.',
		items: [
			{ label: 'Airspace', href: '/learn/airspace' },
			{ label: 'RVSM & Altitudes', href: '/learn/rvsm' },
			{ label: 'Direction of Flight', href: '/learn/direction-of-flight' },
			{ label: 'Equipment Suffixes', href: '/learn/equipment-suffixes' },
			{ label: 'Navigation', href: '/learn/navigation' },
			{ label: 'Airways', href: '/learn/airways' },
			{ label: 'Departure Procedures', href: '/learn/departure-procedures' },
		],
	},
	reference: {
		title: 'Reference',
		description:
			'Fast lookup material for clearance handling, readbacks, amendments, and coordination.',
		items: [
			{ label: 'CRAFT', href: '/reference/craft' },
			{ label: 'IFR Clearances', href: '/reference/clearances' },
			{ label: 'Amendments', href: '/reference/amendments' },
			{ label: 'Readbacks', href: '/reference/readbacks' },
			{ label: 'Coordination', href: '/reference/coordination' },
			{ label: 'Phraseology', href: '/reference/phraseology' },
		],
	},
	kmem: {
		title: 'KMEM',
		description:
			'Memphis-specific notes for delivery, surface operations, runways, taxiways, and frequencies.',
		items: [
			{ label: 'Clearance Delivery', href: '/kmem/clearance-delivery' },
			{ label: 'Ground', href: '/kmem/ground' },
			{ label: 'Local', href: '/kmem/local' },
			{ label: 'Runways', href: '/kmem/runways' },
			{ label: 'Taxiways', href: '/kmem/taxiways' },
			{ label: 'SIDs', href: '/kmem/sids' },
			{ label: 'STARs', href: '/kmem/stars' },
			{ label: 'Frequencies', href: '/kmem/frequencies' },
		],
	},
	training: {
		title: 'Training',
		description:
			'Structured development surfaces for sessions, knowledge checks, and scenario practice.',
		items: [
			{ label: 'MEM Tier 2', href: '/training/tier-2' },
			{ label: 'Training Sessions', href: '/training/sessions' },
			{ label: 'Knowledge Checks', href: '/training/knowledge-checks' },
			{ label: 'Scenarios', href: '/training/scenarios' },
		],
	},
	resources: {
		title: 'Resources',
		description:
			'Primary source documents, facility references, and supporting material.',
		items: [
			{ label: 'KMEM ATCT SOP', href: '/resources/kmem-atct-sop' },
			{ label: 'ZME SOPs', href: '/resources/zme-sops' },
			{ label: 'ZME LOAs', href: '/resources/zme-loas' },
			{ label: 'ZME Reference Card', href: '/resources/zme-reference-card' },
			{ label: 'FAA 7110.65', href: '/resources/faa-7110-65' },
			{ label: 'CRC Documentation', href: '/resources/crc-documentation' },
		],
	},
} as const;

export const dashboardCards = [
	{
		title: 'CRAFT Quick Reference',
		label: 'Reference',
		href: '/reference/craft',
		description: 'Clearance limit, route, altitude, frequency, transponder.',
	},
	{
		title: 'KMEM Clearance Delivery',
		label: 'KMEM',
		href: '/kmem/clearance-delivery',
		description: 'Initial airport-specific planning and clearance flow.',
	},
	{
		title: 'KMEM Ground',
		label: 'KMEM',
		href: '/kmem/ground',
		description: 'Taxi, runway crossing, and surface movement reminders.',
	},
	{
		title: 'Airspace Reference',
		label: 'Learn',
		href: '/learn/airspace',
		description: 'Airspace hierarchy and quick scanning cues.',
	},
	{
		title: 'Training / MEM Tier 2',
		label: 'Training',
		href: '/training/tier-2',
		description: 'Structured practice space for facility progression.',
	},
	{
		title: 'Quick Tools',
		label: 'Tools',
		href: '/tools',
		description:
			'Placeholder foundation for CRAFT, altitude, and lookup tools.',
	},
] as const;
