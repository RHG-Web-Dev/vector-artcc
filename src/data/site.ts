export const site = {
	name: 'CONTROL',
	subtitle: 'Memphis ARTCC Controller Companion',
	description:
		'CONTROL is a Memphis ARTCC controller reference and training companion focused on KMEM and ZME operations.',
	brand: 'CONTROL',
	brandSubline: 'MEMPHIS ARTCC / KMEM',
	logo: {
		src: '/img/control-mark.svg',
		alt: 'CONTROL',
	},
	navigation: [
		{ label: 'Dashboard', href: '/' },
		{ label: 'Learn', href: '/learn' },
		{ label: 'Reference', href: '/reference' },
		{ label: 'KMEM', href: '/kmem' },
		{ label: 'Training', href: '/training' },
		{ label: 'Tools', href: '/tools' },
		{ label: 'Resources', href: '/resources' },
	],
	footer: {
		text: 'CONTROL | Memphis ARTCC Controller Companion',
	},
} as const;
