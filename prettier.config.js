/**
 *  @type {import("prettier").Options}
 */
const config = {
  vueIndentScriptAndStyle: true,
  plugins: [
    "prettier-plugin-css-order",
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  cssDeclarationSorterOrder: "smacss",
  importOrder: [
    "^react$",
    "<TYPES>^(react)",
    "^clsx$",
    "<TYPES>^(clsx)",
    "^@*next",
    "<TYPES>^(@*next)",
    "<BUILTIN_MODULES>",
    "<TYPES>^(node:)",
    "<THIRD_PARTY_MODULES>",
    "<TYPES>^([@a-z])",
    "^~/(.*)$",
    "<TYPES>^~/(.*)",
    "^[.]",
    "<TYPES>",
    "",
    "^(?!.*[.]css$)[./].*$",
    ".css$",
  ],
  // renovate: datasource=npm depName=typescript
  importOrderTypeScriptVersion: "5.9.3",
  tailwindFunctions: ["clsx", "cn", "cva", "cx"],
};

export default config;
