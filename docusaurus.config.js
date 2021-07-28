const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'MooPay Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://paper.moopay.live/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'MooPay', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'MooPay Whitepaper',
      logo: {
        alt: 'My Site Logo',
        src: 'img/moo.png',
      },
      items: [
  
 //       {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/MooPay',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Whitepaper',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/moopay',
            },
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/moopayments',
            },
          ],
        },
        {
          title: 'More',
          items: [
          //  {
            //  label: 'Blog',
            //  to: '/blog',
         //   },
            {
              label: 'GitHub',
              href: 'https://github.com/MooPay',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} MooPay`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
			routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        //  editUrl:
      //      'https://github.com/facebook/docusaurus/edit/master/website/',
        },
       // blog: {
       //   showReadingTime: true,
          // Please change this to your repo.
      //    editUrl:
      //      'https://github.com/facebook/docusaurus/edit/master/website/blog/',
      //  },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
