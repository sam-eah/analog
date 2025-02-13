/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    // { type: 'autogenerated', dirName: '.' },
    'introduction',
    'getting-started',
    {
      type: 'category',
      label: 'Features',
      items: [
        {
          type: 'category',
          label: 'Routing',
          items: [
            {
              type: 'doc',
              id: 'features/routing/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'features/routing/metadata',
              label: 'Route Metadata',
            },
            {
              type: 'doc',
              id: 'features/routing/content',
              label: 'Content Routes',
            },
          ],
        },
        {
          type: 'category',
          label: 'API Routes',
          items: [
            {
              type: 'doc',
              id: 'features/api/overview',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Static Site Generation',
          items: [
            {
              type: 'doc',
              id: 'features/server/static-site-generation',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Server Side Rendering',
          items: [
            {
              type: 'doc',
              id: 'features/server/server-side-rendering',
              label: 'Overview',
            },
          ],
        },
        {
          type: 'category',
          label: 'Testing',
          items: [
            {
              type: 'doc',
              id: 'features/testing/overview',
              label: 'Overview',
            },
            {
              type: 'doc',
              id: 'features/testing/vitest',
              label: 'Adding Vitest',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Deployment',
      items: [
        {
          type: 'doc',
          id: 'features/deployment/overview',
          label: 'Overview',
        },
        {
          type: 'doc',
          id: 'features/deployment/providers',
          label: 'Providers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Integrations',
      items: [
        {
          type: 'category',
          label: 'Astro Integration',
          items: [
            {
              type: 'doc',
              id: 'packages/astro-angular/overview',
              label: 'Overview',
            },
          ],
        },
      ],
    },
    'contributors',
    'contributing',
    'sponsoring',
  ],

  // But you can create a sidebar manually
  /*
  docsSidebar: [
    {
      type: 'category',
      label: 'Docs',
      items: ['introduction'],
    },
  ],
   */
};

module.exports = sidebars;
