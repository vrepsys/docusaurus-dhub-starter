---
description: Code blocks with syntax highlighting and titles, and tables — editing them visually in Dhub.
---

# Code blocks & tables

## Code blocks

Type `/code` to insert a code block, or start a line with three backticks. Pick the language for syntax highlighting, and optionally give the block a title:

```js title="docusaurus.config.js"
const config = {
  title: 'My Docs',
  tagline: 'Documentation that stays in sync',
};
```

Code blocks support dozens of languages out of the box:

```python
def greet(name: str) -> str:
    return f"Hello, {name}!"
```

## Tables

Type `/table` to insert a table. Add and remove rows and columns from the controls that appear when your cursor is inside the table — no more counting pipes in Markdown.

| Block      | Slash command | Stored in your repo as   |
| ---------- | ------------- | ------------------------ |
| Callout    | `/callout`    | `:::note` admonition     |
| Tabs       | `/tabs`       | `<Tabs>` component       |
| Toggle     | `/toggle`     | `<details>` element      |

Inside a table cell, the `/` menu is limited to inline blocks — regular text, inline images, and links work best there.

:::tip[Try it]
Add a row to the table above, or insert a code block below and switch its language.
:::
