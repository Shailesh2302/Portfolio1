import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Next.js Core Web Vitals + TypeScript Rules
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    rules: {
      // Example custom rule overrides:
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
       '@next/next/no-img-element': 'off',
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never" },
      ],
    },
  }),

  // Prettier Compatibility (Disables conflicting ESLint formatting rules)
  {
    name: "prettier",
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {
      "prettier/prettier": "error",
    },
  },
];

// Export the config
export default eslintConfig;
