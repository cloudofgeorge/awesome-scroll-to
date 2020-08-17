/**
 *	Easing - easeInOutQuint
 */

export const easeInOutQuint = (t: number) => (t < 0.5 ? 16 * t * t * t * t * t : 1 - (-2 * t + 2) ** 2 / 2);
