# eslint-plugin-no-new-date

Disallow new Date().

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-new-date`:

```sh
npm install eslint-plugin-no-new-date --save-dev
```

## Usage

Add `no-new-date` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-new-date"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-new-date/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here


