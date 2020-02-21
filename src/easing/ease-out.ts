/**
 *	Easing - EaseOut
 */
export const easeOut = (timingFn: (arg0: number) => number) => (timeFraction: number) => 1 - timingFn(1 - timeFraction);
