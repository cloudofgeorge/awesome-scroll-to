import { easeInOutQuart } from '../ease-in-out-quart';

describe('Easing - easeInOutQuart', () => {
	it('Should return value', () => {
		const ease = easeInOutQuart(100);
		expect(ease).toEqual(-768476807);
	});

	it('Should return value if t > 0.5', () => {
		const ease = easeInOutQuart(0.4);
		expect(ease).toEqual(0.20480000000000007);
	});

	it('Should return value if t < 0.5', () => {
		const ease = easeInOutQuart(100);
		expect(ease).toEqual(-768476807);
	});
});
