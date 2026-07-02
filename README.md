# OpenRind

The marketing and documentation site for **OpenRind** — credit-based billing and AI developer-tool spend management. Built with [Docusaurus](https://docusaurus.io/) and deployed to GitHub Pages at [www.openrind.com](https://www.openrind.com).

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static content hosting service. Broken internal links fail the build (`onBrokenLinks: "throw"`).

### Deployment

Deployment is automated: pushing to the `openrind` branch triggers the **Deploy to GitHub Pages** GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and publishes it to GitHub Pages. Pull requests to `openrind` run a test build. The custom domain is configured via `CNAME`.
