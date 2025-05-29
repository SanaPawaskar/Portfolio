// next.config.js

const isGithubPages = process.env.DEPLOY_ENV === 'GH_PAGES';

module.exports = {
  reactStrictMode: true,
  basePath: isGithubPages ? '/Portfolio' : '',
  assetPrefix: isGithubPages ? '/Portfolio/' : '',
  trailingSlash: true, // GitHub Pages likes this
};
