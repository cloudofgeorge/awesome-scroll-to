# Awesome scroll to

[![npm version](https://img.shields.io/npm/v/awesome-scroll-to.svg?style=flat-square)](https://www.npmjs.com/package/awesome-scroll-to)
[![npm downloads](https://img.shields.io/npm/dm/awesome-scroll-to.svg?style=flat-square)](https://www.npmjs.com/package/awesome-scroll-to)

Lightweight 659B (GZIPPED) scroll to function. Scrolls your Document or any other DOM element.

## Demo

See the [DEMO](http://testfortest.ru/awesome-scroll-to/)

## Features

* Function as a Promise
* Types for TypeScript
* Awesome API
* No Window scroll
* Cross Browser

## Usage

Install from NPM

```
npm install awesome-scroll-to
```

Use into your App

```javascript
import { awesomeScrollTo } from 'awesome-scroll-to';

// Returns a promise which will be resolved when scroll animation is finished

// Examples:

// Scroll by document
awesomeScrollTo(document.documentElement, { offset: { top: 300 } }).then(() => {
  console.log('Animation scroll is done')
});

// Scroll by container
awesomeScrollTo(document.querySelector('.scroll-content'), { offset: { top: 200 } });

// Scroll diagonally
awesomeScrollTo(document.querySelector('.scroll-content'), { offset: { top: 600, left: 600} });

// Scroll to ellement
const elementPosition = document.querySelector('.block-to-scroll').getBoundingClientRect().top;
awesomeScrollTo(document.documentElement, {offset: {top: elementPosition}})

```

## Options

```javascript
const options = {
	offset: {
		top?: 0,
		left?: 0
	},
	duration: 600,
	animation: 'linear'
}
```

#### Animations

```javascript
'linear' | 'easeInOut' | 'easeOut'
```

## Browser support

All modern browsers

