import { linear } from './linear';
import { easeInOutCubic } from './ease-in-out-cubic';
import { easeInOutQuad } from './ease-in-out-quad';
import { easeInOutQuart } from './ease-in-out-quart';
import { easeInOutQuint } from './ease-in-out-quint';

export const easing = {
	linear,
	easeInOutCubic,
	easeInOutQuad,
	easeInOutQuart,
	easeInOutQuint,
};

export type Easing = keyof typeof easing;
