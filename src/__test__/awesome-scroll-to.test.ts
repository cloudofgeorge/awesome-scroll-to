import { awesomeScrollTo } from '../awesome-scroll-to';

describe('awesomeScrollTo', () => {
	test('scrollHeight', () => {
		const scrollHeightSpy = jest.spyOn(document.documentElement, 'scrollHeight', 'get').mockImplementation(() => 100);

		awesomeScrollTo({ x: 0, y: 100 }, { elementToScroll: document.documentElement });
		expect(scrollHeightSpy).toHaveBeenCalled();
	});

	test('scrollLeft', () => {
		const scrollHeightSpy = jest.spyOn(document.documentElement, 'scrollLeft', 'get').mockImplementation(() => 100);

		awesomeScrollTo({ x: 100, y: 0 }, { elementToScroll: document.documentElement });
		expect(scrollHeightSpy).toHaveBeenCalled();
	});

	test('requestAnimationFrame', () => {
		awesomeScrollTo({ x: 100, y: 0 }, { elementToScroll: document.documentElement });

		requestAnimationFrame(() => {
			expect(true).toBeTruthy();
		});
	});
});
