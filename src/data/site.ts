export const site = {
  name: 'CONTROL',
  subtitle: 'ARTCC Controller Companion',
  description:
    'CONTROL is a professional reference, training, and utility platform for VATSIM air traffic controllers.',
  brand: 'CONTROL',
  brandSubline: 'ARTCC CONTROLLER COMPANION',
  logo: {
    src: '/img/control-mark.svg',
    alt: 'CONTROL',
  },
  navigation: [
    { label: 'Dashboard', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'Reference', href: '/reference' },
    { label: 'Facilities', href: '/kmem' },
    { label: 'Training', href: '/training' },
    { label: 'Tools', href: '/tools' },
    { label: 'Resources', href: '/resources' },
  ],
  footer: {
    text: 'CONTROL | ARTCC Controller Companion',
  },
} as const;
