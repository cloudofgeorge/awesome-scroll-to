import { easeInOutQuint } from '../ease-in-out-quint';

describe('Easing - easeInOutQuint', () => {
	it('Should return value if t > 0.5', () => {
		const ease = easeInOutQuint(0.4);
		expect(ease).toEqual(0.16384000000000007);
	});

	it('Should return value if t < 0.5', () => {
		const ease = easeInOutQuint(100);
		expect(ease).toEqual(-19601);
	});
});
