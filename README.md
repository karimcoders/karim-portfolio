# Karim — Portfolio

Premium, responsive portfolio built with Next.js 16, React 19 and TypeScript.

## Edit before launch

Update `data/config.ts` with:

- Professional email
- GitHub URL
- LinkedIn URL
- Upwork URL
- Final Vercel domain

Projects, services, technologies and contact information are data-driven from this file.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

### Git integration (recommended)

1. Create a GitHub repository.
2. Push this project to the repository.
3. In Vercel, choose **Add New → Project**.
4. Import the GitHub repository.
5. Keep the detected Next.js settings and deploy.
6. Copy the production URL into `canonicalUrl` in `data/config.ts` and redeploy.

### Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## Production check

```bash
npm run build
npm run start
```

The production build currently completes successfully.
