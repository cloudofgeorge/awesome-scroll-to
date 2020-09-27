# Awesome scroll to

Scroll to function with a registry. Scrolls your Document or any other DOM element.

## Features

- Function as a Promise
- Types for TypeScript
- Awesome API
- No Window scroll
- Cross Browser

## Usage

Install from NPM

```
npm install awesome-scroll-to
```

#### Use into your App

```javascript
import { awesomeScrollTo } from 'awesome-scroll-to';

// Returns a promise which will be resolved when scroll animation is finished

// Examples:

// Scroll by document
awesomeScrollTo(
	{ x: 0, y: 0 },
	{
		elementToScroll: document.documentElement,
		maxDuration: 400,
	}
).then(() => {
	console.log('Animation scroll is done');
});

// Scroll by container
awesomeScrollTo(
	{ x: 0, y: 200 },
	{
		elementToScroll: document.querySelector('.scroll-content'),
		maxDuration: 400,
	}
);

// Scroll diagonally
awesomeScrollTo(
	{ x: 600, y: 600 },
	{
		elementToScroll: document.querySelector('.scroll-content'),
		maxDuration: 400,
	}
);

// Scroll to ellement
const elementPosition = document.querySelector('.block-to-scroll').getBoundingClientRect().top;
awesomeScrollTo(
	{ x: 0, y: elementPosition },
	{
		elementToScroll: document.documentElement,
		maxDuration: 400,
	}
);
```

## Options

| Name               | Type               | Default        | Description                                         |
| :----------------- | :----------------- | :------------- | :-------------------------------------------------- |
| cancelOnUserAction | `boolean`          | `true`         | can be use cancelAnimation or preventDefaultHandler |
| easingFn           | `enum['easingFn']` | easeInOutCubic | Animation styles                                    |
| elementToScroll    | `HTMLElement`      |                | Element for scroll                                  |
| horizontalOffset   | `number`           | `0`            | Start point for horizontal offset                   |
| verticalOffset     | `number`           | `0`            | Start point for vertical offset                     |
| maxDuration        | `number`           | `0`            | Maximum direction point                             |
| maxDuration        | `number`           | `0`            | Minimum direction point                             |
| speed              | `number`           | `500`          | Speed value                                         |

#### Animations

| easingFn  
| :----------------- |
| `"linear"` |
| `"easeInOutCubic"` |
| `"easeInOutQuad"` |
| `"easeInOutQuart"` |
| `"easeInOutQuint"` |

## Browser support

All modern browsers
