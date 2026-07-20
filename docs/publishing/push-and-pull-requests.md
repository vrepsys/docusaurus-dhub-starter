---
description: Publishing changes from Dhub — push directly to your main branch or open a pull request for review.
---

# Push & pull requests

Everything you edit in Dhub is a draft until you publish it. Drafts are shared — teammates editing in Dhub see each other's changes in real time — but your site and your repo don't change until you push.

## Two ways to publish

The push button in the top bar gives you a choice:

- **Push to main** — commits your changes straight to the main branch. If your site auto-deploys (see [Deploy your site](./deploy.md)), the changes go live right away. Great for solo projects and quick fixes.
- **Create pull request** — opens a pull request on GitHub with your changes, so someone can review before anything ships. Great for teams and for docs that need sign-off.

Dhub remembers which one you picked, so your usual flow is one click.

## Working with an open pull request

While your pull request is open, you can keep editing in Dhub and **update the pull request** with your latest changes — no need to open a new one. You can also jump to the PR on GitHub straight from the push menu.

## Pulling changes made outside Dhub

If someone edits files directly on GitHub or locally, use **Pull from GitHub** to bring those changes into Dhub. Content, navigation, and images all sync — Dhub is a view of your repo, not a copy of it.

:::note
Writers on your team don't need to know any of the Git underneath — to them it's "publish" and "request review". But everything lands in your repo as normal commits and pull requests, so developers keep their usual workflow.
:::
