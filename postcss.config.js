module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
    "postcss-preset-env": {
      stage: 3,
      features: {
        "nesting-rules": true,
      },
    },
  },
};
