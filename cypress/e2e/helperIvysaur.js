import axios from 'axios';

let ivysaur;

axios
	.get('https://pokeapi.co/api/v2/pokemon/ivysaur')
	.then((response) => (ivysaur = response.data))
	.catch((e) => console.log(e));

//console.log(ivysaur);

const statNameFormatter = (statName) => new String(statName).replace('-', ' ');

export {ivysaur, statNameFormatter};
