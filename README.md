# @simenandre/prettier

Reusable prettier config

## Installation

```bash
yarn add --dev @simenandre/prettier
```

or

```bash
pnpm add --save-dev @simenandre/prettier
```

## Usage

Add a key in your **package.json** file.

```
"prettier": "@simenandre/prettier"
```

**OR**

Create a **.prettierrc** , **.prettierrc.yaml** , **.prettierrc.yml** or
**.prettierrc.json** file and export a string.

```
"@simenandre/prettier"
```

**OR**

Create a **prettier.config.js** or **.prettierrc.js** file and export an object.

```
module.exports = {
  ...require("@simenandre/prettier"),
  tabWidth: 2,
};
```

## Thanks

Most of this code is based on https://github.com/devsht/prettier-config.
