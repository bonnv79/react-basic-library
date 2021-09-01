# react-basic-library

> react-basic-library

[![NPM](https://img.shields.io/npm/v/react-basic-library.svg)](https://www.npmjs.com/package/react-basic-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-basic-library
```

## Demo
Demo and playground are available [here](https://bonnv79.github.io/react-basic-library/)

## Versions
[CHANGELOG](CHANGELOG.md)

## Usage Example
```JavaScript
import React from 'react';
import Component from 'react-basic-library';

const Demo = () => {
  const [value, setValue] = React.useState('');
  return (
    <Component value={value} onChange={setValue} />
  );
};
```

## Develop

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## License

MIT © [bonnv79](https://github.com/bonnv79)
