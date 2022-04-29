// Importes
import './App.css';
import React, { useEffect, useState } from 'react'
// Importes de API
import { getPokemonData, getPokemons, searchPokemon } from './pokeapi'
// Importes de componentes
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
// Importes de contexts
import { FavoriteProvider } from './contexs/favoriteContext';

function App () {
  // useState()
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  // Variáveis
  const itemsPerPage = 24;
  const favoritesKey = 'favorites';
  // Funções
  const fecthPokemon = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itemsPerPage, itemsPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const res = await Promise.all(promises);
      setPokemons(res);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itemsPerPage))
    } catch (err) {
      console.log('fecthPokemons error', err);
    };  
  };
  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey)) || [];
    setFavorites(pokemons);
  }
  // hooks
  useEffect (() => {
    fecthPokemon();
  }, [page]);
  useEffect (() => {
    loadFavoritePokemons();
  }, []);

  const updateFavoritePokemons = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);
    if (favoriteIndex >= 0) {
      updatedFavorites.splice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    };
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };
  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fecthPokemon();
    };

    setLoading(true);
    setNotFound(false);
    const res = await searchPokemon(pokemon);
    if (!res) {
      setLoading(false);
      setNotFound(true);
    } else {
      setPokemons([res]);
      setPage(0);
      setTotalPages(1)
    }
    setLoading(false);

  };

  // html
  return (
    <FavoriteProvider
      value={{favoritePokemons: favorites, updateFavoritePokemons}}
    >
      <div>

        <Navbar/>

        <Searchbar
          onSearchHandler={onSearchHandler}
        />
        
        {notFound ? (
          <div className="not-found">
            <h2>Desculpe...</h2>
            <div className="not-found-text">
              Esse pokemon não foi encontrado!
            </div>
          </div>
        ) :
        (<Pokedex 
          pokemons={pokemons} 
          loading={loading} 
          page={page} 
          setPage={setPage} 
          totalPages={totalPages}
          />)}
          
      </div>
    </FavoriteProvider>
  );
};

export default App;