import {getIvysaurObject, statNameFormatter} from './helperIvysaur';

const ivysaur = getIvysaurObject();

describe('Pokedex', () => {
	it('front page can be opened', () => {
		cy.visit('http://localhost:5000');
		cy.contains('ivysaur');
		cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.');
	});

	it('navigate from home page to ivysaur view and check for it\'s content', () => {
		cy.visit('http://localhost:5000');
		cy.contains('ivysaur').click();
		cy.url().should('include', '/pokemon/ivysaur');
		cy.contains('ivysaur');
		cy.contains('chlorophyll');
		cy.contains('overgrow');

		//console.log(ivysaur);
		if (ivysaur && ivysaur.stats) {
			ivysaur.stats.forEach((stat) => {
				cy.contains(statNameFormatter(stat.stat.name)), cy.contains(stat.base_stat);
			});
		}
	});
});

