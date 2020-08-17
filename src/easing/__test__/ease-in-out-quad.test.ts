import { easeInOutQuad } from '../ease-in-out-quad';

describe('Easing - easeInOutQuad', () => {
	it('Should return value if t > 0.5', () => {
		const ease = easeInOutQuad(0.4);
		expect(ease).toEqual(0.32000000000000006);
	});

	it('Should return value if t < 0.5', () => {
		const ease = easeInOutQuad(100);
		expect(ease).toEqual(-19601);
	});
});
