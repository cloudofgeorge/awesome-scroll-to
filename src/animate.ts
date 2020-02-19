import { clamp } from './utils';

type Params = {
	timingFn: (value: number) => number;
	drawFn: (value: number) => void;
	duration: number;
};

export const animate = ({ timingFn, drawFn, duration }: Params) => {
	const timeBegin = performance.now();

	return new Promise((resolve: () => void) => {
		const raf = () =>
			requestAnimationFrame(time => {
				const timeFraction = clamp(0, 1, (time - timeBegin) / duration);
				const progress = timingFn(timeFraction);

				drawFn(progress);

				if (timeFraction < 1) {
					raf();
				} else {
					resolve();
				}
			});

		raf();
	});
};
