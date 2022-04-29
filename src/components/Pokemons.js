// Importes
import React, { useContext } from 'react';
import FavoriteContext from '../contexs/favoriteContext';

const Pokemons = (props) => {
  // useContext()
  const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
  // Props
  const { pokemon } = props;

  // Funções
  const onFavoriteClick = () => {
    console.log('Favoritado');
    updateFavoritePokemons(pokemon.name);
  }

  // html
  return (
    <div className='pokemon-container'>
      <div className='image-container'>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-image' />
      </div>
      <div className='card-body'>
        <div className='card-body'>
          <div className='card-top'>
            <p>Name: <b>{pokemon.name}</b></p>
            <div>N.: #{pokemon.id}</div>
          </div>
          <div className='card-bottom'>
            <div className='pokemon-type'>
              <div className='type-text'>
                type:
              </div>
              {pokemon.types.map((type, index) => {
                return (
                  <div>
                    {type.type.name === 'grass' ? (
                      <div key={index} className='pokemon-type-text grass'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'poison' ? (
                      <div key={index} className='pokemon-type-text poison'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'fire' ? (
                      <div key={index} className='pokemon-type-text fire'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'water' ? (
                      <div className='pokemon-type-text water'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'bug' ? (
                      <div className='pokemon-type-text bug'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                      )}
                    {type.type.name === 'normal' ? (
                      <div className='pokemon-type-text normal'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'flying' ? (
                      <div className='pokemon-type-text flying'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'electric' ? (
                      <div className='pokemon-type-text electric'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'ground' ? (
                      <div className='pokemon-type-text ground'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'fairy' ? (
                      <div className='pokemon-type-text fairy'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'fighting' ? (
                      <div className='pokemon-type-text fight'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'psychic' ? (
                      <div className='pokemon-type-text psychic'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'steel' ? (
                      <div className='pokemon-type-text steel'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'dark' ? (
                      <div className='pokemon-type-text dark'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'ice' ? (
                      <div className='pokemon-type-text ice'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'ghost' ? (
                      <div className='pokemon-type-text ghost'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'dragon' ? (
                      <div className='pokemon-type-text dragon'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                    {type.type.name === 'rock' ? (
                      <div className='pokemon-type-text rock'>
                        {type.type.name}
                      </div>
                    ) : (
                      <div/>
                    )}
                  </div> 
                )
              })}
            </div>
            <button type='button' className='btn-favorite' onClick={onFavoriteClick}>
              <div className='btn-fav'>{favoritePokemons.includes(pokemon.name) ? <div className='fav-actived'><ion-icon name='heart' className='heart'></ion-icon></div> : <ion-icon name='heart-outline' className='heart'></ion-icon>}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;