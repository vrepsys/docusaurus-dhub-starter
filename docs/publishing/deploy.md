---
description: Deploying this Docusaurus site — Vercel, Netlify, or GitHub Pages, with automatic deploys on every push.
---

# Deploy your site

This template is a standard Docusaurus site, so it deploys anywhere static sites do. Once deployed, the loop is simple:

**edit in Dhub → push → your host rebuilds → changes are live** — usually within a minute or two.

## Vercel or Netlify (recommended)

Import your repository at [vercel.com/new](https://vercel.com/new) or [app.netlify.com/start](https://app.netlify.com/start). Both detect Docusaurus automatically; the defaults are all you need:

| Setting          | Value           |
| ---------------- | --------------- |
| Build command    | `npm run build` |
| Output directory | `build`         |

From then on, every push to your main branch deploys automatically, and pull requests get their own preview URLs — handy for reviewing docs changes on the real site before merging.

## GitHub Pages

Docusaurus also deploys to GitHub Pages; see the [Docusaurus deployment guide](https://docusaurus.io/docs/deployment#deploying-to-github-pages). Set `url`, `baseUrl`, `organizationName`, and `projectName` in `docusaurus.config.js` first.

## Set your production URL

Whichever host you choose, update `url` in `docusaurus.config.js` to your site's real address — Docusaurus uses it for sitemaps, social cards, and canonical links. There's a full checklist in [Make it yours](../make-it-yours.md).
