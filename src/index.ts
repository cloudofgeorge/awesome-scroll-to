import { animate } from './animate';
import { Easing, easing } from './easing';

type Options = {
	duration?: number;
	offset: {
		top?: number;
		left?: number;
	};
	animation?: keyof Easing;
};

/**
 * @param {element} element HTML element
 * @param {Object} options
 * @example
 *
 * awesomeScrollTo(document.documentElement, { offset: { left: 0, top: 300 } })
 */

export function awesomeScrollTo(element: HTMLElement, { offset, duration = 600, animation = 'linear' }: Options) {
	/**
	 * Calculate value for top | left
	 */
	const calculate = (value: number, to: 'top' | 'left', progress: number) => {
		const offsetForCalc = offset[to] ?? 0;
		return value - (value - offsetForCalc) * progress;
	};

	/**
	 * Draw function
	 */
	const scrollDraw = (progress: number) => {
		const top = calculate(element.scrollTop, 'top', progress);
		const left = calculate(element.scrollLeft, 'left', progress);

		element.scrollTop = top;
		element.scrollLeft = left;
	};

	/**
	 * Call Animate util
	 */
	return animate({
		timingFn: easing[animation],
		duration,
		drawFn: (progress: number) => {
			scrollDraw(progress);
		},
	});
}

const WINDOW_EXISTS = typeof window !== 'undefined';

if (WINDOW_EXISTS) {
	(window as any).awesomeScrollTo = awesomeScrollTo;
}
