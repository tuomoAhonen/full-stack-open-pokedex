module.exports = {
	env: {
		//browser: true,
		commonjs: true,
		es2023: true,
		node: true,
		'jest/globals': true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	globals: {
		//require: 'readonly',
		//process: 'readonly',
		document: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2023,
		sourceType: 'module',
	},
	plugins: ['react', 'jest'],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		eqeqeq: 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': ['error', 'never'],
		'arrow-spacing': ['error', {before: true, after: true}],
		//'no-console': 'error',
		'react/prop-types': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

