---
description: Callouts (admonitions) in Dhub — note, tip, info, warning, and danger, with optional custom titles.
---

# Callouts

Callouts highlight information that shouldn't blend into the surrounding text. Type `/callout` to insert one, then use the dropdown on the block to switch its type.

In your repo, callouts are stored as standard Docusaurus [admonitions](https://docusaurus.io/docs/markdown-features/admonitions) (`:::note`, `:::tip`, and so on), so they render the same everywhere.

## The five types

:::note
Background information — context that's good to know but safe to skip.
:::

:::tip
A shortcut or best practice. Use tips to point out the easy way to do something.
:::

:::info
Neutral supporting information, like links to related reading.
:::

:::warning
Something that can go wrong. Use warnings before steps people commonly get wrong.
:::

:::danger
Destructive or irreversible actions. Reserve this one for when it really matters.
:::

## Custom titles

A callout can have its own title instead of the default label:

:::tip[You can rename me]
Click the title of this callout in Dhub and type your own.
:::

:::tip[Try it]
Insert a callout below with `/callout`, then switch its type using the dropdown on the block.
:::
