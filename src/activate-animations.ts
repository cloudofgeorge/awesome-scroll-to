export class ActiveAnimations {
	private elements: HTMLElement[] = [];

	private cancelMethods: (() => void)[] = [];

	public add(element: HTMLElement, cancelAnimation: () => void) {
		this.elements.push(element);
		this.cancelMethods.push(cancelAnimation);
	}

	public remove(element: HTMLElement, shouldStop = true) {
		const index = this.elements.indexOf(element);

		if (index > -1) {
			// Stop animation
			if (shouldStop) {
				this.cancelMethods[index]();
			}
			// Remove it
			this.elements.splice(index, 1);
			this.cancelMethods.splice(index, 1);
		}
	}
}
