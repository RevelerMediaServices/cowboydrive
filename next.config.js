const optimizedImages = require("next-optimized-images");

module.exports = optimizedImages({
  optimizeImagesInDev: true,
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/calendar": { page: "/calendar" },
      "/contact": { page: "/contact" }
    };
  }
});
