import {themes as prismThemes} from "prism-react-renderer";
import type {Config} from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "OpenRind",
  tagline: "Credit-based Billing for AI Companies.",
  favicon: "/img/favicon.jpg",


// Set the production url of your site here
url: "https://www.openrind.com",

// Set the /<baseUrl>/ pathname under which your site is served
// For GitHub pages deployment, it is often '/<projectName>/'
baseUrl: "/",

  organizationName: "openrind", // Usually your GitHub org/user name.
  projectName: "www-openrind", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
		  remarkPlugins: [],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          // Remove or change this URL to customize the "edit this page" link.
         // editUrl:
            //"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/docs/important/privacy",
            from: ["/privacy"],
          },
        ],
      },
    ],
  ],

  themeConfig: {
    image: "/img/og.png",
    metadata: [
    // 1) Standard meta description
    {
      content: 'Credit-based billing infrastructure for AI companies. Automatic credit pricing, consumption tracking, and margin protection.',
    },
    // 2) Open Graph description (used by Telegram, Facebook, LinkedIn…)
    {
      property: 'og:description',
      content: 'Credit-based billing infrastructure for AI companies. Automatic credit pricing, consumption tracking, and margin protection.',
    },
    {
      property: 'og:site_name',
      content: 'OpenRind',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    // 3) Twitter Card description
    {
      name: 'twitter:description',
      content: 'Credit-based billing infrastructure for AI companies. Ship the Lovable billing model without building it yourself.',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    // Default OG image (overridden per-page via <Head>)
    {
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
  ],
    navbar: {
      title: "",
      logo: {
        alt: "OpenRind",
        src: "/img/openrind-logo.png",
      },
      items: [
        {
          position: "left",
          label: "Github",
          to: "https://github.com/openrind",
        },
        { to: "https://x.com/openrind", label: "Twitter", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      // The visible footer is rendered by the swizzled theme
      // (src/components/app/footer.tsx); these config links are unused.
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} OpenRind Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
