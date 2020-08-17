import { linear } from '../linear';

describe('Easing - linear', () => {
	it('Should return value', () => {
		const ease = linear(100);
		expect(ease).toEqual(10000);
	});
});
