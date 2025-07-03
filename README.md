# Arun Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Radix UI components. This project showcases your skills, projects, and contact information in a visually appealing and interactive way.

## Features

- **Next.js 14**: App Router, server components, and optimized performance.
- **TypeScript**: Type-safe codebase for reliability and maintainability.
- **Tailwind CSS**: Utility-first styling for rapid UI development.
- **Radix UI**: Accessible, unstyled UI primitives for building custom components.
- **Framer Motion**: Smooth animations and transitions.
- **Responsive Design**: Looks great on all devices.
- **Dark Mode**: Theme toggling with system preference support.
- **Sectioned Layout**: Hero, About, Skills, Projects, and Contact sections.
- **Reusable UI Components**: Accordion, Dialog, Card, Toast, and more.

## Demo

[Live Demo](https://arun-portfolio.vercel.app/) <!-- Update with your deployed URL if available -->

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/) (or use npm/yarn, but pnpm is recommended)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/newman1x1/arun-portfolio.git
   cd arun-portfolio
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**

   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**

   Visit [http://localhost:3000](http://localhost:3000) to see your portfolio.

## Project Structure

```
.
├── app/                # Next.js app directory (pages, layout, global styles)
├── components/         # Reusable React components (sections, UI primitives)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets (images, icons)
├── styles/             # Global CSS (if any)
├── tailwind.config.ts  # Tailwind CSS configuration
├── postcss.config.mjs  # PostCSS configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project metadata and scripts
└── ...
```

## Customization

- **Update Content:**
  - Edit section files in `components/` (e.g., `about-section.tsx`, `projects-section.tsx`, etc.) to personalize your information.
  - Add or update images in the `public/images/` directory.
- **Change Theme:**
  - Modify Tailwind colors in `tailwind.config.ts`.
  - Adjust dark mode settings in the `ThemeProvider` component.
- **Add New Sections:**
  - Create new components in `components/` and include them in `app/page.tsx` or `app/layout.tsx`.

## Scripts

- `pnpm dev` / `npm run dev` / `yarn dev` — Start the development server
- `pnpm build` / `npm run build` / `yarn build` — Build for production
- `pnpm start` / `npm start` / `yarn start` — Start the production server
- `pnpm lint` / `npm run lint` / `yarn lint` — Lint the codebase

## Deployment

You can deploy this project to any platform that supports Node.js. Popular options:

- [Vercel](https://vercel.com/): Zero-config deployment for Next.js.
- [Netlify](https://www.netlify.com/)
- [Render](https://render.com/)

### Deploying to Vercel

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com/) and import your repository.
3. Follow the prompts to deploy.

## Environment Variables

- Create a `.env.local` file in the root for any environment-specific variables (API keys, etc.).
- Example:
  ```env
  NEXT_PUBLIC_API_URL=https://api.example.com
  ```

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/newman1x1/arun-portfolio/issues) if you want to contribute.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

> **Made with ❤️ by Arun**
