import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    // "@storybook/addon-design-assets",
    "@storybook/addon-viewport",
    "@storybook/addon-outline",
    "@storybook/addon-measure",
    "@storybook/addon-essentials",
    '@storybook/addon-jest',
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-styling-webpack",
    "@chromatic-com/storybook",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
};
export default config;
