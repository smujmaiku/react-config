process.env = {
	REACT_APP_VERSION: 'v0.0.1',
	REACT_APP_NAME: 'sz-config',
	REACT_APP_SOME_URL: 'https://smujmaiku.com',
	REACT_APP_EXTRA__UNDER___SCORES_: 'low dashes',
	NODE_VERSION: 'exclude this',
	REACT_APP_: 'also invalid',
};

describe('react-config', () => {
	it('should read process.env', () => {
		const reactConfig = require('.');
		expect(reactConfig).toEqual({
			version: process.env.REACT_APP_VERSION,
			name: process.env.REACT_APP_NAME,
			someUrl: process.env.REACT_APP_SOME_URL,
			extraUnderScores: process.env.REACT_APP_EXTRA__UNDER___SCORES_,
		});
	});
});
