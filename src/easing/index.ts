import { makeEaseInOut } from './make-ease-in-out';
import { makePower } from './make-power';
import { makeEaseOut } from './make-ease-out';

export const easing = {
	easeInOut: makeEaseInOut(makePower(2)),
	easeOut: makeEaseOut(makePower(2)),
};

export type Easing = typeof easing;
