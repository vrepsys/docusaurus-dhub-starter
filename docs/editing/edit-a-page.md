---
description: The basics of editing in Dhub — formatting text, markdown shortcuts, the slash menu, and frontmatter.
---

# Edit a page

Dhub shows your content the way it looks on your site, not as raw Markdown. Behind the scenes, every page is still a plain `.md` or `.mdx` file in your repo — Dhub reads and writes those files for you.

## Format text

Select any text and a bubble menu appears with formatting options. This sentence has **bold**, *italic*, `inline code`, and [a link](https://dhub.dev) you can play with.

The usual Markdown shortcuts also work as you type: `##` followed by a space starts a heading, `-` starts a bulleted list, `>` starts a quote, and so on.

## The slash menu

On an empty line, type `/` to open the insert menu. It has everything: headings, lists, quotes, tables, code blocks, callouts, tabs, toggles, images, dividers, and more.

The other pages in this section show the most useful blocks in action:

- [Callouts](./callouts.md)
- [Tabs & toggles](./tabs-and-toggles.mdx)
- [Code blocks & tables](./code-blocks-and-tables.md)
- [Images](./images.md)
- [Custom components](./custom-components.mdx)

## Frontmatter

The block at the very top of this page (visible in Dhub) is the page's **frontmatter** — metadata stored as YAML at the top of the file. Docusaurus uses it for things like:

- `description` — the page's meta description for search engines and link previews
- `slug` — a custom URL for the page
- `title` — overrides the title derived from the first heading

If a page doesn't have frontmatter yet, type `/frontmatter` to add it. The page's label in the sidebar comes from the navigation panel, not from frontmatter — see [Navigation](../publishing/navigation.md).

:::tip[Try it]
Place your cursor at the end of this line, press Enter, and type `/` — then insert anything.
:::
