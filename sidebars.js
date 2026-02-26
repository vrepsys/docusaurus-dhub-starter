const {readFileSync} = require('node:fs');
const {join} = require('node:path');

const sidebars = buildSidebars();

function buildSidebars() {
  const navPath = join(__dirname, 'navigation.json');
  const tabs = JSON.parse(readFileSync(navPath, 'utf-8'));

  const result = {};
  for (const tab of tabs) {
    const sidebarId = slugify(tab.label);
    result[sidebarId] = convertChildren(tab.children || [], tab.path);
  }
  return result;
}

function convertChildren(children, tabPath) {
  return children.map(node => convertNode(node, tabPath)).filter(Boolean);
}

function convertNode(node, tabPath) {
  switch (node.type) {
    case 'page':
      return {
        type: 'doc',
        id: stripPrefix(stripExtension(node.path), tabPath),
        label: node.label,
      };

    case 'link':
      return {
        type: 'link',
        label: node.label,
        href: node.url,
      };

    case 'folder':
      return {
        type: 'category',
        label: node.label,
        items: convertChildren(node.children || [], tabPath),
      };

    case 'group':
      return {
        type: 'category',
        label: node.label,
        collapsible: false,
        collapsed: false,
        items: convertChildren(node.children || [], tabPath),
      };

    case 'divider':
      return {
        type: 'html',
        value: '<hr>',
        className: 'sidebar-divider',
      };

    default:
      return null;
  }
}

function stripExtension(filePath) {
  return filePath.replace(/\.(mdx?|jsx?|tsx?)$/, '');
}

function stripPrefix(filePath, prefix) {
  if (prefix && filePath.startsWith(prefix + '/')) {
    return filePath.slice(prefix.length + 1);
  }
  return filePath;
}

function slugify(label) {
  return label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

module.exports = sidebars;