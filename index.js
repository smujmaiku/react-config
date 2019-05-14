/*!
 * React Config <https://github.com/smujmaiku/react-config>
 * Copyright(c) 2018-2019 Michael Szmadzinski
 * MIT Licensed
 */

const REACT_PREFACE = 'REACT_APP_';

const toCamelCase = key => key.toLowerCase().replace(
	/_+($|[^_])/g,
	str => str.replace(/_/g, '').toUpperCase(),
);

module.exports = Object.entries(process.env)
	.filter(([key]) => key.startsWith(REACT_PREFACE) && key !== REACT_PREFACE)
	.map(([key, value]) => [toCamelCase(key.slice(REACT_PREFACE.length)), value])
	.reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
