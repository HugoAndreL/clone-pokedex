// Importes
import React from 'react';

// Context
const FavoriteContext = React.createContext({
  favoritePokemons: [],
  updateFavoritePokemons: (id) => null
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;