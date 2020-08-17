import { ActiveAnimations } from '../activate-animations';

describe('ActiveAnimations', () => {
	test('equal', () => {
		const activeAnimations = new ActiveAnimations();
		expect(activeAnimations).toEqual({ cancelMethods: [], elements: [] });
	});

	test('add/remove', () => {
		const activeAnimations = new ActiveAnimations();

		const el = document.createElement('div');
		document.body.appendChild(el);

		const func = () => {};

		activeAnimations.add(el, func);

		expect(activeAnimations).toEqual({ cancelMethods: [func], elements: [el] });

		activeAnimations.remove(el);
		expect(activeAnimations).toEqual({ cancelMethods: [], elements: [] });
	});
});
