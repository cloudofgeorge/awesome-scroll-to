import { easeInOutCubic } from '../ease-in-out-cubic';

describe('Easing - easeInOutCubic', () => {
	it('Should return value if t > 0.5', () => {
		const ease = easeInOutCubic(0.4);
		expect(ease).toEqual(0.25600000000000006);
	});

	it('Should return value if t < 0.5', () => {
		const ease = easeInOutCubic(100);
		expect(ease).toEqual(3881197);
	});
});
