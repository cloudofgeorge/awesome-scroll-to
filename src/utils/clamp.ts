/**
 * Clamping value into min and max
 *
 * @param {number}  min
 * @param {number} value
 * @param {number} max
 */
export function clamp(min: number, value: number, max: number): number {
	const realMin = min < max ? min : max;
	const realMax = min < max ? max : min;

	return Math.max(realMin, Math.min(realMax, value));
}
