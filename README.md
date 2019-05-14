# React Config

[![build status][travis-image]][travis-url]
[![coverage status][codecov-image]][codecov-url]

A clean config object for react env variables.

## Installation

`npm i smujmaiku/react-config`

## Examples

sample `.env` file

```sh
REACT_APP_VERSION=$npm_package_version
REACT_APP_NAME=$npm_package_name
REACT_APP_SOME_URI="https://smujmaiku.com"
```

### ES6

Babel with `import`

```js
import reactConfig from 'react-config';

console.log(reactConfig.version) // 0.1.0
console.log(reactConfig.name)    // react-config
console.log(reactConfig.someUri) // https://smujmaiku.com
```

### CommonJS

NodeJS with `require`

```js
const reactConfig = require('react-config');

console.log(reactConfig.version) // 0.1.0
console.log(reactConfig.name)    // react-config
console.log(reactConfig.someUri) // https://smujmaiku.com
```

## License

Copyright (c) 2018-2019, Michael Szmadzinski. (MIT License)

[travis-image]: https://travis-ci.org/smujmaiku/react-config.svg?branch=master
[travis-url]: https://travis-ci.org/smujmaiku/react-config
[codecov-image]: https://coveralls.io/repos/github/smujmaiku/react-config/badge.svg
[codecov-url]: https://coveralls.io/github/smujmaiku/react-config
