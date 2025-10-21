# Trailmerge Website

A modern, responsive website built with Astro for Trailmerge, a UX design consultancy specializing in SaaS and enterprise applications.

## 🚀 Project Overview

Trailmerge helps SaaS and enterprise product teams elevate their design through:
- **UX Design Audits** - Comprehensive evaluation of your application's user experience
- **Design System Development** - Building scalable, consistent design practices
- **Team Augmentation** - Fractional design team members to scale your efforts
- **Strategic Consulting** - Best practices and process optimization

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.14.7
- **Language**: TypeScript
- **Styling**: CSS with CSS Variables
- **Build Tool**: Astro CLI
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── assets/
│   ├── images/          # All project images and logos
│   ├── astro.svg        # Astro logo
│   └── background.svg   # Background graphics
├── components/
│   └── Welcome.astro    # Welcome component
├── layouts/
│   └── Layout.astro     # Main layout component
└── pages/
    └── index.astro      # Homepage
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trailmerge-website/Astro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run astro` - Run Astro CLI commands

## 🎨 Design System

The website uses a consistent design system with CSS custom properties for colors and spacing:

### Color Palette
- **Primary Green**: Used for CTAs and brand elements
- **Mint**: Accent color for highlights
- **Grey Scale**: Various shades for text and backgrounds
- **Cinnamon**: Used for error states and warnings

### Typography
- Clean, modern typography optimized for readability
- Consistent heading hierarchy
- Responsive font sizing

## 📱 Features

### Homepage Sections
- **Hero Section** - Main value proposition with CTA
- **Services Overview** - Three core service offerings
- **Client Showcase** - Featured companies and testimonials
- **Case Studies** - Detailed project examples
- **Blog Preview** - Latest articles and insights
- **Contact Modal** - Lead generation form

### Interactive Elements
- Responsive navigation with mobile menu
- Contact modal with form validation
- Smooth scrolling and transitions
- Optimized images with lazy loading

## 🖼️ Assets

All images are optimized and stored in the `src/assets/images/` directory:
- Company logos (AchieveIt, LoanShout, Staat, Tourial, UserIQ)
- Team headshots
- Service illustrations
- Case study screenshots
- Brand assets

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements
- Progressive enhancement

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting Platforms
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 🔧 Configuration

The project uses a minimal Astro configuration (`astro.config.mjs`). You can extend it with:
- Integrations (React, Vue, Svelte)
- Build optimizations
- Deployment settings
- Development server configuration

## 📝 Content Management

Currently, content is managed directly in Astro components. For future scalability, consider:
- Headless CMS integration (Contentful, Strapi)
- Markdown-based content
- Dynamic routing for blog posts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2024 Trailmerge Ltd Co. All rights reserved.

## 📞 Contact

- **Address**: 3100 Interstate North Circle SE, Suite 200, Atlanta, GA 30339
- **Website**: [trailmerge.com](https://trailmerge.com)
- **Careers**: [trailmerge.breezy.hr](https://trailmerge.breezy.hr/)

---

Built with ❤️ by the Trailmerge team