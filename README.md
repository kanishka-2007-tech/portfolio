# Kanishka Gupta - Portfolio

A personal portfolio website built with React, TypeScript, and Tailwind CSS, featuring an interactive terminal, project showcases, and a resume viewer.

## Tech Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4

## Run Locally

**Prerequisites:** Node.js (v18 or later recommended)

1. Install dependencies:
   ```
   npm install
   ```
2. Start the dev server:
   ```
   npm run dev
   ```
3. Open the URL printed in the terminal (default: `http://localhost:3000`)

## Build for Production

```
npm run build
```

This generates a static, production-ready build in the `dist/` folder.

To preview the production build locally before deploying:

```
npm run preview
```

## Deployment

The `dist/` folder produced by `npm run build` is a static site and can be deployed to any static hosting provider.

### Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel auto-detects the Vite framework preset:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**.


### Any static host (Cloudflare Pages, Firebase Hosting, S3, etc.)

Run `npm run build` and upload the contents of the `dist/` folder — no server-side runtime is required.
