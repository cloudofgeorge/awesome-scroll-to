/**
 *	Easing - EaseInOut
 */
export const makeEaseInOut = (timingFn: {
	(timingFraction: number): number;
	(timingFraction: number): number;
	(arg0: number): number;
}) => (timeFraction: number) => {
	if (timeFraction < 0.5) {
		return timingFn(2 * timeFraction) / 2;
	}

	return (2 - timingFn(2 * (1 - timeFraction))) / 2;
};
