module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  "previewHead": (head) => (`
    ${head}
    <style>
      html, body, #root {
        height: 100%;
      }
    </style>
  `),
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/nexty-ui/'
    }
    return config
  }
}
