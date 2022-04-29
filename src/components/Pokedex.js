// Importes
import React from 'react';
import Pokemons from './Pokemons'
import Page from './Page'

const Pokedex = (props) => {
  // Props
  const { pokemons, loading, page, setPage, totalPages } = props;

  // Funções
  const onLeftClick = () => {
    console.log('Voltando...');
    if (page > 0) {
      setPage(page - 1);
    };
  };
  const onRightClick = () => {
    console.log('Avançando...');
    if (page + 1 != totalPages) {
      setPage(page + 1);
    };
  };

  // html
  return (
    <div>
      <div className='pokedex-container'>
        <h1>Pokedex</h1>
        <Page 
          page={page + 1} 
          totalPages={totalPages} 
          onLeftClick={onLeftClick} 
          onRightClick={onRightClick}
        />
      </div>
      {loading ? (
        <div className='loading'>
          Carregando... Por favor, aguarde.
        </div>
      ) : (
        <div className='pokedex-grid'>
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <Pokemons 
                key={index} 
                pokemon={pokemon}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;