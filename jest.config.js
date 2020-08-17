module.exports = {
	coverageDirectory: '<rootDir>/coverage',
	preset: 'ts-jest/presets/default',
	rootDir: './',
	verbose: true,
	globals: {
		'ts-jest': {
			tsConfig: {
				target: 'es2019',
			},
		},
	},
	collectCoverageFrom: [
		'src/**/*.{ts,tsx,js,jsx}',
		'!**/mixins/**/*',
		'!src/**/*.test-types.{ts,tsx}',
		'!**/index.ts',
		'!**/node_modules/**',
	],
	moduleNameMapper: {
		'.+\\.(css|scss|png|jpg|jpeg|svg|ttf|woff|woff2)$': 'jest-transform-stub',
	},
	setupFilesAfterEnv: ['<rootDir>/test/setup-test.ts'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	testRegex: '(.*\\.(test|spec))\\.(t|j)sx?$',
	moduleDirectories: ['node_modules', 'src'],
	transformIgnorePatterns: ['node_modules'],
	modulePathIgnorePatterns: ['<rootDir>/ui-tests/'],
};
