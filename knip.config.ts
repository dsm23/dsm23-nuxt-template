import type { KnipConfig } from "knip";

const config: KnipConfig = {
  tags: ["-knipignore"],
  entry: ["src/**/*.d.ts"],
  nuxt: {
    config: ["nuxt.config.{js,mjs,ts}"],
    entry: [
      "src/app.config.ts",
      "src/**/*.d.vue.ts",
      "src/app.{vue,jsx,tsx}",
      "src/error.{vue,jsx,tsx}",
      "src/router.options.ts",
      "src/layouts/**/*.{vue,jsx,tsx}",
      "src/middleware/**/*.ts",
      "src/pages/**/*.{vue,jsx,tsx}",
      "src/plugins/**/*.ts",
      "src/modules/**/*.{ts,vue}",
      "src/server/api/**/*.ts",
      "src/server/middleware/**/*.ts",
      "src/server/plugins/**/*.ts",
      "src/server/routes/**/*.ts",
      "src/server/tasks/**/*.ts",
    ],
  },
};

export default config;
