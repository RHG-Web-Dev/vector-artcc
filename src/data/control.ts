export const quickReference = [
	{ label: 'N-E', value: 'ODD' },
	{ label: 'S-W', value: 'EVEN' },
	{ label: 'CRAFT', value: 'C R A F T' },
] as const;

export const craftItems = [
	{
		letter: 'C',
		label: 'Clearance Limit',
		detail: 'The destination or cleared limit.',
	},
	{
		letter: 'R',
		label: 'Route',
		detail: 'SID, transition, route as filed, or amended routing.',
	},
	{
		letter: 'A',
		label: 'Altitude',
		detail: 'Initial altitude or expected altitude as applicable.',
	},
	{
		letter: 'F',
		label: 'Frequency',
		detail: 'Departure frequency or next control frequency.',
	},
	{
		letter: 'T',
		label: 'Transponder',
		detail: 'Squawk code assignment and mode reminder.',
	},
] as const;

export const airspaceItems = [
	{
		label: 'Airspace',
		value:
			'Start with controlled vs. uncontrolled, then add local facility notes.',
	},
	{
		label: 'Scannable cue',
		value: 'Use level, class, and service type before detailed notes.',
	},
	{
		label: 'Controller mode',
		value: 'Keep the shortest usable summary on screen while working traffic.',
	},
] as const;

export const controllerModePreview = [
	{ label: 'CRAFT', value: 'C Destination' },
	{ label: 'Route', value: 'R SID / Transition / Route / As Filed' },
	{ label: 'Altitude', value: 'A Initial / Expect' },
	{ label: 'Frequency', value: 'F Departure' },
	{ label: 'Transponder', value: 'T Squawk' },
] as const;
