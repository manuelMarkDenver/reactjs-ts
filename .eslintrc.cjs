module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
  ],

  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import", "react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-vars": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "@components/**",
            group: "parent",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
