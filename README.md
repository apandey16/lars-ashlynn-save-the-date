This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It has been enhanced with [Vite](https://vitejs.dev) integration using the [@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite) plugin.

## Getting Started

### Next.js Development Server

Run the Next.js development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Vite Development Server

Alternatively, you can run the project using Vite:

```bash
npm run vite:dev
# or
yarn vite:dev
```

Open [http://localhost:5173](http://localhost:5173) to view the Vite version.

## Working with the Codebase

You can start editing the Next.js page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

For the Vite version, edit `src/App.tsx` to see your changes.

This project uses [Tailwind CSS](https://tailwindcss.com) for styling with both Next.js and Vite setups.

This project also uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Vite:

- [Vite Documentation](https://vitejs.dev/guide/) - learn about Vite features.
- [Tailwind CSS with Vite](https://tailwindcss.com/docs/installation/using-vite) - how to use Tailwind CSS with Vite.

## Deploy

### Next.js Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Vite Deployment

To build your Vite app for production:

```bash
npm run vite:build
```

You can then deploy the `dist` directory to your hosting provider of choice.
