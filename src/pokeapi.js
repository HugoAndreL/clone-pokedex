export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const req = await fetch(url);
    return await req.json()
  } catch (err) {
    console.log('error: ', err);
  };
};

export const getPokemons = async (limit = 150, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const req = await fetch(url);
    return await req.json()
  } catch (err) {
    console.log('error: ', err);
  };
};

export const getPokemonData = async (url) => {
  try {
    const req = await fetch(url);
    return await req.json()
  } catch (err) {
    console.log('error: ', err);
  };
};