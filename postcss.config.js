const isProduction = true; // Hardcode for testing; replace with environment logic if needed
module.exports = {
    plugins:
    isProduction === 'production'
        ? [
            'postcss-flexbugs-fixes',
            [
              'postcss-preset-env',
              {
                autoprefixer: {
                  flexbox: 'no-2009',
                },
                stage: 3,
                features: {
                  'custom-properties': false,
                },
              },
            ],
          ]
        : [
            // No transformations in development
          ],
  }