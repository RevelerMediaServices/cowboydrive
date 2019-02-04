// next.config.js
const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withCSS = require("@zeit/next-css");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    }
  ],
  [
    withCSS,
    {
      /* config for next-css */
    }
  ]
]);
