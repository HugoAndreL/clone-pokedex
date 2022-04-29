// Importes
import React, { useState } from 'react';

const Searchbar = (props) => {
  // useState()
  const [search, setSearch] = useState();
  
  // props
  const { onSearchHandler } = props;
  
  // Funções
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
    if (event.target.value.length === 0)  {
      onSearchHandler(undefined);
    }
  };
  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  // html
  return ( 
    <div className='search-container'>
      <div className="searchbar-container">
        <input type='search' placeholder='Buscar pokemon' onChange={onChangeHandler} />
      </div>
      <div className='btn-searchbar'>
        <button onClick={onButtonClickHandler}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Searchbar;