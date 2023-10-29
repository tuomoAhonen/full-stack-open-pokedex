import axios from 'axios';

const getIvysaurObject = async () => {
	//let ivysaur;

	return axios
		.get(`https://pokeapi.co/api/v2/pokemon/ivysaur`)
		.then((response) => response.data)
		.catch((e) => console.log(e));

	//console.log(ivysaur);
	//return ivysaur;
};

const statNameFormatter = (statName) => new String(statName).replace(`-`, ` `);

export {getIvysaurObject, statNameFormatter};

