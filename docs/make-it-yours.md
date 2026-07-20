---
description: A checklist for turning this starter template into your own documentation site.
---

# Make it yours

Done with the tour? Here's how to turn this template into your site. Most of it is content work you can do in Dhub; a few one-time steps touch code files, which you can edit on GitHub or locally.

## 1. Name your site

In `docusaurus.config.js`, set:

- `title` and `tagline` — shown in the navbar, homepage, and page titles
- `url` — your production address (see [Deploy your site](./publishing/deploy.md))

## 2. Swap the logo and favicon

Replace `static/img/logo.svg` and `static/img/favicon.ico` with your own. The social-card image (`themeConfig.image` in the config) is what shows when your docs are shared on social media — replace that too.

## 3. Update the footer

The footer links live in `docusaurus.config.js` under `themeConfig.footer`. Point them at your own community and resources.

## 4. Delete the tour

The **Editing** and **Publishing** groups, and this page, exist to teach Dhub. When you don't need them anymore, delete them from the navigation panel and start your real docs structure. Rewrite the Welcome page as your introduction — or keep the tour around while your team onboards.

## 5. The homepage

The landing page at `/` is a React page (`src/pages/index.js`), so it's edited in code rather than in Dhub. Update the text in `src/components/HomepageFeatures/index.js` and the hero in `src/pages/index.js`.

Prefer docs as your front page? Delete `src/pages/index.js`, set `routeBasePath: '/'` in the docs preset options, and add `slug: /` to the frontmatter of your intro page.

## 6. The blog

The blog is optional. Write posts in Dhub just like docs pages — or remove the blog entirely by deleting the `blog` folder, the blog entry in `docusaurus.config.js` presets, and its navbar item.

That's it — everything else is writing docs.
