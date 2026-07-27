---
description: Adding images in Dhub — upload from your computer, full-width blocks, inline images, and captions.
---

# Images

Type `/image` to insert a full-width image block, then upload a file from your computer. Uploaded images land in your repo's `static/img` folder, so they're versioned together with your content.

Images can have captions:

<figure data-align="center">
  <img src={require("/img/image.png").default} />

  <figcaption>
    An image block with a caption
  </figcaption>
</figure>

## Inline images

For small images that sit inside a line of text — icons, badges, tiny screenshots — use `/inline image` instead. Inline images also work inside table cells.

## Plain Markdown images

Standard Markdown image syntax works too, including images referenced by URL:

![Docusaurus logo](/img/logo.svg)

:::tip[Try it]
Insert an image block below with `/image` and upload any picture from your computer.
:::
