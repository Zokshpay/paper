const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Zokshpay WhitePaper',
  tagline: 'Crypto payments done right',
  url: 'https://paper.zoksh.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ZokshPay', // Usually your GitHub org/user name.
  projectName: 'paper', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Zoksh Whitepaper',
      logo: {
        alt: 'Zokshpay Logo',
        src: 'img/zoksh.png',
      },
      items: [
  
 //       {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Zokshpay',
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
              href: 'https://www.linkedin.com/company/zokshpay',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/EkQRsts4XH',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/zokshpay',
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
              href: 'https://github.com/Zokshpay',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zokshpay`,
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
