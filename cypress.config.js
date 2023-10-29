const {defineConfig} = require(`cypress`);
const webpackConfig = require(`./webpack.config`);

// setupNodeEvents is used for custom code inside the cypress testing and it's behavior
module.exports = defineConfig({
	component: {
		// eslint-disable-next-line no-unused-vars
		setupNodeEvents(on, config) {
			// component testing node events setup code
		},
		devServer: {
			framework: `react`,
			bundler: `webpack`,
			// optionally pass in webpack config
			webpackConfig,
			// or a function - the result is merged with any
			// webpack.config that is found
			/*webpackConfig: async () => {
				// ... do things ...
				const modifiedConfig = await injectCustomConfig(baseConfig);
				return modifiedConfig;
			},*/
		},
	},
	e2e: {
		// eslint-disable-next-line no-unused-vars
		setupNodeEvents(on, config) {
			// e2e testing node events setup code
		},
		baseUrl: `http://localhost:5000`,
	},
	screenshotOnRunFailure: false,
	video: false,
});

