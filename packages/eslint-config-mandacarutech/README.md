# eslint-config-mandacarutech

> Mandacaru Tech's ESLint config, following our code conventions

[![npm version](https://img.shields.io/npm/v/eslint-config-mandacarutech.svg)](https://www.npmjs.com/package/eslint-config-mandacarutech)

## Usage

To install with all necessary `peerDependencies`, use [install-peerdeps](https://github.com/nathanhleung/install-peerdeps#usage):

```sh
npx install-peerdeps --dev eslint-config-mandacarutech
```

All exported configs should be added to your [ESlint configuration file](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) `extends`.
For example, in a JSON `.eslintrc`:

```json
{
  "extends": "mandacarutech"
}
```

### `"extends": "mandacarutech"`

Lint all the things, including ECMAScript 6+, React, and Prettier.

If you don't need React, use [eslint-config-mandacarutech-base](https://npmjs.com/eslint-config-mandacarutech-base).

### `"extends": ["mandacarutech", "mandacarutech/jest]`

Jest-specific rules and environment added to the default export.


### `prettier` Editor Plugin Integration

Unfortunately, super-useful editor plugins like `prettier-atom` and `prettier-vscode` do not load Prettier settings from ESLint config, which is where we load our Prettier options from. To workaround this, add a `.prettierrc.js` or `prettier.config.js` file to your root with the following content:

```js
module.exports = require('prettier-config-mandacarutech');
```

## Related

- [Mandacaru Tech's Prettier config](https://npmjs.com/prettier-config-mandacarutech)
- [Mandacaru Tech's Javascript code conventions](https://github.com/mandacarutech/styleguide)

## Development

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests (from the repo root) with `npm test`.

You can make sure this module lints with itself using `npm run lint` (from the repo root).
