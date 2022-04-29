import React, { useContext } from 'react';
import FavoriteContext from '../contexs/favoriteContext';

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img alt='Pokedex' src='https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png' className='logo'/>
      </div>
      <div className='favorites'>
        <div className='container-favorites'><div className='icon-heart'><ion-icon name='heart'></ion-icon></div> {favoritePokemons.length} Favoritos</div>
      </div>
    </nav>
  );
};

export default Navbar;