import { Easing } from './easing';

export type Coords = { x: number; y: number };

export type Options = {
	cancelOnUserAction?: boolean;
	easingFn?: Easing;
	elementToScroll: HTMLElement;
	horizontalOffset?: number;
	maxDuration?: number;
	minDuration?: number;
	passive?: boolean;
	speed?: number;
	verticalOffset?: number;
};
