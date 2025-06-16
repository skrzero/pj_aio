import js from "@eslint/js";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig} */
export default [
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser, // ✅ Ajout ici
      },
    },
    rules: {
      // Règles personnalisées ici
    },
  },
];