//import {getIvysaurObject, statNameFormatter} from './Helpers';

describe(`Pokedex`, () => {
	it(`front page can be opened`, () => {
		cy.visit(`http://localhost:5000`);
		cy.contains(`ivysaur`);
		cy.contains(`Pokémon and Pokémon character names are trademarks of Nintendo.`);
	});

	it(`navigate from home page to ivysaur view and check for it's content`, async () => {
		cy.visit(`http://localhost:5000`);
		cy.contains(`ivysaur`).click();
		cy.url().should(`include`, `/pokemon/ivysaur`);
		cy.contains(`ivysaur`);
		cy.contains(`chlorophyll`);
		cy.contains(`overgrow`);

		/* Can not test like this in cypress, unless you modify it
		const ivysaur = await getIvysaurObject();
		cy.get(ivysaur).then(() => {
			if (ivysaur && ivysaur.stats) {
				ivysaur.stats.forEach((stat) => {
					cy.log(stat);
					cy.contains(statNameFormatter(stat.stat.name));
					cy.contains(stat.base_stat);
				});
			} else {
				throw new Error(
					'Could not fetch ivysaur-object for the helper-function and could not test, that all stats exists on the page. Try re-run or check that api-url for the fetch still exists.'
				);
			}
		});
		*/
	});
});

