# Awesome scroll to

[![npm version](https://img.shields.io/npm/v/awesome-scroll-to.svg?style=flat-square)](https://www.npmjs.com/package/awesome-scroll-to)
[![npm downloads](https://img.shields.io/npm/dm/awesome-scroll-to.svg?style=flat-square)](https://www.npmjs.com/package/awesome-scroll-to)

Lightweight 676B (GZIPPED) scroll to function. Scrolls your Document or any other DOM element. 

## Demo

See the [DEMO](https://stanko.github.io/awesome-scroll-to/)

## Features

* Function as a Promise
* Types for TypeScript
* Awesome API

## Usage

Install from NPM

```
npm install awesome-scroll-to
```

Use into your App

```javascript
import {awesomeScrollTo} from 'awesome-scroll-to';

// It returns a promise which will be resolved when scroll animation is finished

awesomeScrollTo(document.documentElement, { offset: { left: 0, top: 300 } }).then(() => {
  console.log('Animation scroll is done')
});
```
