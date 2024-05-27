import { SimplePokemon } from "@/app/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  [key: string]: SimplePokemon;
}

const getInitialState = () => {
  const favoritePokemons = localStorage.getItem("favoritePokemons");
  if (favoritePokemons) {
    return JSON.parse(favoritePokemons);
  }
  return {};
}

const initialState: PokemonState = {
  ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "3" : { id: "3", name: "venusaur" },
  // "5" : { id: "5", name: "charmeleon" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
      } else {
        state[id] = pokemon;
      }
      localStorage.setItem("favoritePokemons", JSON.stringify(state));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
