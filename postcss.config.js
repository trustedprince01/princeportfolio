export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: [
        'default', 
        {
          discardComments: {
            removeAll: true,
          },
          minifyFontValues: true,
          minifyGradients: true,
        }
      ]
    },
  },
}