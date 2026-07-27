---
description: How sidebar navigation works in this template — the navigation.json file and Dhub's visual navigation panel.
---

# Navigation

The sidebar of this site is defined in a single file: `navigation.json` in the project root. Dhub reads and writes that file, so you can rearrange your sidebar by dragging items in the **navigation panel** — no config editing required.

## What you can put in the sidebar

| Type    | What it is                                                       |
| ------- | ---------------------------------------------------------------- |
| Tab     | A top-level section with its own sidebar (this site has one: **Docs**) |
| Page    | A link to a document                                             |
| Folder  | A collapsible section of pages                                   |
| Group   | An always-open section with a heading                            |
| Link    | An external URL                                                  |
| Divider | A horizontal separator                                           |

This template's sidebar is a working example: **Editing** and **Publishing** are groups, there's a divider above [Make it yours](../make-it-yours.md), and **dhub.dev** at the bottom is an external link.

## Renaming and rearranging

A page's sidebar label lives in the navigation panel, not in the page itself — rename it there. Drag pages to reorder them or move them between folders and groups. When you push, the whole structure is saved back to `navigation.json` as one readable file.

## For developers

`sidebars.js` in this template converts `navigation.json` into Docusaurus's sidebar format at build time. You shouldn't need to touch either file by hand, but they're plain JSON and JavaScript if you ever want to.

If you add a second tab, it gets its own sidebar — add a navbar item for it in `docusaurus.config.js` (see the existing `docSidebar` entry as a reference).
