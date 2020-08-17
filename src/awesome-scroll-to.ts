import { clamp } from './utils';
import { ActiveAnimations } from './activate-animations';
import { easing } from './easing';
import { Coords, Options } from './types';

/**
 * @param {Object} { x: 0, y: 0 } Coords
 * @param {Object} options
 * @example
 *
 * awesomeScrollTo({ x: 0, y: 0 }, { elementToScroll: document.querySelector('.scroll-content') })
 */
export function awesomeScrollTo(
	{ x = 0, y = 0 }: Coords,
	{
		cancelOnUserAction = true,
		easingFn = 'easeInOutCubic',
		elementToScroll,
		horizontalOffset = 0,
		verticalOffset = 0,
		maxDuration = 3000,
		minDuration = 250,
		speed = 500,
	}: Options
) {
	const activeAnimations = new ActiveAnimations();

	let xState = x;
	let yState = y;

	xState += horizontalOffset;
	yState += verticalOffset;

	const scrollTo = (xPosition: number, yPosition: number) => {
		elementToScroll.scrollLeft = xPosition;
		elementToScroll.scrollTop = yPosition;
	};

	const maxHorizontalScroll = elementToScroll.scrollWidth - elementToScroll.clientWidth;
	const initialHorizontalScroll = elementToScroll.scrollLeft;

	if (xState > maxHorizontalScroll) {
		xState = maxHorizontalScroll;
	}

	const horizontalDistanceToScroll = xState - initialHorizontalScroll;

	const maxVerticalScroll = elementToScroll.scrollHeight - elementToScroll.clientHeight;
	const initialVerticalScroll = elementToScroll.scrollTop;

	if (yState > maxVerticalScroll) {
		yState = maxVerticalScroll;
	}

	const verticalDistanceToScroll = yState - initialVerticalScroll;

	const horizontalDuration = Math.abs(Math.round((horizontalDistanceToScroll / 1000) * speed));
	const verticalDuration = Math.abs(Math.round((verticalDistanceToScroll / 1000) * speed));

	let duration = horizontalDuration > verticalDuration ? horizontalDuration : verticalDuration;

	if (duration < minDuration) {
		duration = minDuration;
	} else if (duration > maxDuration) {
		duration = maxDuration;
	}

	return new Promise((resolve: (hasScrolledToPosition: boolean) => void) => {
		if (horizontalDistanceToScroll === 0 && verticalDistanceToScroll === 0) {
			resolve(true);
		}

		activeAnimations.remove(elementToScroll, true);

		let requestID: number;

		const cancelAnimation = () => {
			removeListeners();
			cancelAnimationFrame(requestID);

			resolve(false);
		};

		activeAnimations.add(elementToScroll, cancelAnimation);

		const preventDefaultHandler = (event: Event) => event.preventDefault();

		const handler = cancelOnUserAction ? cancelAnimation : preventDefaultHandler;

		const eventOptions = { passive: cancelOnUserAction };

		const events = ['wheel', 'touchstart', 'keydown', 'mousedown'];

		const removeListeners = () => {
			events.forEach(eventName => {
				elementToScroll.removeEventListener(eventName, handler);
			});
		};

		events.forEach(eventName => {
			elementToScroll.addEventListener(eventName, handler, eventOptions);
		});

		const startingTime = performance.now();

		const step = (time: number) => {
			const timeFraction = clamp(0, 1, (time - startingTime) / duration);
			const t = timeFraction;
			const drawFunc = easing[easingFn];
			const horizontalScrollPosition = Math.round(initialHorizontalScroll + horizontalDistanceToScroll * drawFunc(t));
			const verticalScrollPosition = Math.round(initialVerticalScroll + verticalDistanceToScroll * drawFunc(t));

			if (timeFraction < duration && (horizontalScrollPosition !== x || verticalScrollPosition !== y)) {
				scrollTo(horizontalScrollPosition, verticalScrollPosition);

				requestID = requestAnimationFrame(step);
			} else {
				scrollTo(x, y);

				cancelAnimationFrame(requestID);

				removeListeners();

				activeAnimations.remove(elementToScroll, false);

				resolve(true);
			}
		};

		requestID = requestAnimationFrame(step);
	});
}
