module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "@vue/prettier",
    "@vue/typescript",
    "eslint:recommended"
  ],
  plugins: ["@typescript-eslint", "prettier", "vue"],
  rules: {
    curly: "error",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-mixed-operators": "error",
    "no-param-reassign": "error",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["./*", "../*"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: false,
        semi: true,
        jsxBracketSameLine: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        parser: "vue"
      }
    ],
    "sort-imports-es6-autofix/sort-imports-es6": "error",
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/attributes-order": [
      2,
      {
        order: [
          "GLOBAL", // id
          "DEFINITION", // is
          "UNIQUE", // ref, key, slot
          "CONDITIONALS", // v-if, v-else-if, v-else, v-show, v-cloak
          "LIST_RENDERING", // v-for
          "OTHER_ATTR", // all unspecified bound & unbound attributes
          "BINDING", // v-model
          "RENDER_MODIFIERS", // v-pre, v-once
          "CONTENT", // v-html, v-text
          "EVENTS" // v-on
        ]
      }
    ],
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "vue/html-end-tags": "error",
    "vue/html-indent": [
      "error",
      2,
      {
        attribute: 1,
        baseIndent: 0,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always"
        },
        svg: "always",
        math: "always"
      }
    ],
    "vue/name-property-casing": ["error", "kebab-case"],
    "vue/no-multi-spaces": "error",
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    "vue/script-indent": [
      "error",
      2,
      {
        baseIndent: 0
      }
    ],
    "vue/require-prop-types": ["error"],
    "vue/require-valid-default-prop": ["error"]
  },
  parserOptions: {
    parser: "typescript-eslint-parser"
  }
};
