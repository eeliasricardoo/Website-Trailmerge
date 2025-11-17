# Redesign Assets

This directory contains all assets for the website redesign.

## Structure

```
new/
├── home/          # Homepage redesign assets
├── about/         # About page redesign assets
├── blog/          # Blog redesign assets
├── shared/        # Shared components (navbar, footer, etc.)
└── README.md
```

## Usage

When creating new components, reference images from their respective directories:

```astro
<!-- Example: Homepage hero background -->
<img src="/images/new/home/hero-background.svg" alt="Hero background" />

<!-- Example: Shared navbar logo -->
<img src="/images/new/shared/navbar-logo.svg" alt="Trailmerge" />
```

## Migration Plan

Once the redesign is complete:

1. Archive old images to `/images/legacy/`
2. Move new images from `/images/new/[page]/` to `/images/[page]/`
3. Update all component references
4. Delete `/images/new/` directory
