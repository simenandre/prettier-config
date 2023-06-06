/**
 * Simple configuration for Prettier
 *
 * Docs: https://prettier.io/docs/en/configuration.html
 * @type { import("prettier").Options }
 */
module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  htmlWhitespaceSensitivity: 'ignore',
  proseWrap: 'always',
  arrowParens: 'avoid',

  plugins: ['prettier-plugin-package-perfection'],
};
