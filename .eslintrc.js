module.exports = {
	env: {
		//browser: true,
		commonjs: true,
		es6: true,
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
		'no-console': 'off' /*'error'*/,
		'no-restricted-syntax': [
			'error',
			{
				selector: "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
				message: 'Unexpected property on console object was called',
			},
		],
		'react/prop-types': 0,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};

