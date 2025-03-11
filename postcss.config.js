const purgecss = require('postcss-purgecss')({
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'], // Adjust paths as needed
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  });
  
  module.exports = {
    plugins: {
      "postcss-flexbugs-fixes": {},
      "postcss-preset-env": {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": true, // Enable custom properties (recommended unless you have a specific reason to disable)
        },
      },
      ...(process.env.NODE_ENV === 'production' ? [purgecss] : []), // Apply PurgeCSS only in production
    },
  };