const express = require(`express`);
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static(`dist`));

app.get(`/version`, (request, response) => {
	// Could this be fetched from somewhere / auto-updates?
	response.send(`11.12`);
});

app.get(`/health`, (request, response) => {
	// Could this be fetched from somewhere / auto-updates?
	throw `error test`;
	// eslint-disable-next-line no-unreachable
	response.send(`ok`);
});

app.listen(PORT, () => {
	// you can also do this on eslintrs.js rules by using 'no-restricted-syntax' and set 'no-console': 'off'.
	// eslint-disable-next-line no-console
	console.log(`server started on port 5000`);
});

