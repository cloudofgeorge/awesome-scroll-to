import { makePower } from './make-power';
import { linear } from './linear';
import { easeOut } from './ease-out';

const power = makePower(2);

export const easing = {
	linear: linear(power),
	easeInOut: easeOut(power),
	easeOut: easeOut(power),
};

export type Easing = typeof easing;
