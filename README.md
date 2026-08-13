# CONTROL

**Memphis ARTCC Controller Companion**

CONTROL is an Astro + Tailwind reference, training, and utility platform for VATSIM controllers, initially focused on KMEM and ZME.

## Project goals

- Fast controller reference material
- Structured learning content
- MEM Tier 2 training support
- KMEM-specific operational references
- Future interactive tools and Controller Mode

The project is intentionally content-first and uses Astro content collections for documentation and training material.

## Development

```bash
npm install
npm run dev
```

Build the production site with:

```bash
npm run build
```

## Architecture

```text
src/
├── components/   Reusable Astro UI components
├── content/      Learn, reference, KMEM, training, and resource material
├── data/         Shared navigation and structured application data
├── layouts/      Application shell and page layout
├── pages/        Static and content-driven routes
└── styles/       Global design tokens and Tailwind entry point
```

## Content policy

CONTROL distinguishes source-backed material from training notes, personal mnemonics, and unofficial quick references. Official ZME/MEM procedures should only be added when they can be verified against the appropriate source.

Do not treat placeholder routes or training notes as official facility procedures.

## Branching

Use feature branches for changes and target `main` with a pull request. Do not commit directly to `main` for feature work.
