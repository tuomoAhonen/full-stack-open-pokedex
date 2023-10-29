import React from 'react';
import {Routes, Route, useParams} from 'react-router-dom';
import {useApi} from './useApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import PokemonPage from './PokemonPage';
import PokemonList from './PokemonList';

const mapResults = ({results}) =>
	results.map(({url, name}) => ({
		url,
		name,
		id: parseInt(url.match(/\/(\d+)\//)[1]),
	}));

const App = () => {
	const {data: pokemonList, error, isLoading} = useApi(`https://pokeapi.co/api/v2/pokemon/?limit=50`, mapResults);

	if (isLoading) {
		return <LoadingSpinner />;
	}
	if (error) {
		return <ErrorMessage error={error} />;
	}

	return (
		<Routes>
			<Route path='/' element={<PokemonList pokemonList={pokemonList} />} exact />
			<Route
				path='/pokemon/:name'
				Component={() => {
					const params = useParams();
					//console.log(params);
					//console.log(pokemonList);
					const pokemonId = pokemonList && pokemonList.find((pokemon) => pokemon.name === params.name).id;
					//console.log(pokemonId);
					const previous = pokemonList && pokemonList.find(({id}) => id === pokemonId - 1);
					//console.log(previous);
					const next = pokemonList && pokemonList.find(({id}) => id === pokemonId + 1);
					//console.log(next);
					return <PokemonPage pokemonList={pokemonList} previous={previous} next={next} />;
				}}
				/*
				render={(routeParams) => {
					console.log(routeParams);
					const pokemonId = pokemonList.find(({name}) => name === routeParams.match.params.name).id;
					console.log(pokemonId);
					const previous = pokemonList.find(({id}) => id === pokemonId - 1);
					console.log(previous);
					const next = pokemonList.find(({id}) => id === pokemonId + 1);
					console.log(next);
					return <PokemonPage pokemonList={pokemonList} previous={previous} next={next} />;
				}}
        */
			/>
		</Routes>
	);
};

export default App;

