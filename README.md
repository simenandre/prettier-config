# @cobraz/prettier-config

Reusable prettier config

## Installation

```bash
npm i -D @cobraz/prettier-config
```

or

```
yarn add --dev @cobraz/prettier-config
```

## Usage

Add a key in your **package.json** file.

```
"prettier": "@cobraz/prettier-config"
```

**OR**

Create a **.prettierrc** , **.prettierrc.yaml** , **.prettierrc.yml** or **.prettierrc.json** file and export a string.

```
"@cobraz/prettier-config"
```

**OR**

Create a **prettier.config.js** or **.prettierrc.js** file and export an object.

```
module.exports = {
  ...require("@cobraz/prettier-config"),
  tabWidth: 2,
};
```

## Thanks

Most of this code is based on https://github.com/devsht/prettier-config.