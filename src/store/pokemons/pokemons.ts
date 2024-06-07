import { SimplePokemon } from "@/pokemons";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PokemonState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = () => {

//   // if(typeof localStorage === "undefined") return {};

//   const favoritePokemons = localStorage.getItem("favoritePokemons");
//   if (favoritePokemons) {
//     return JSON.parse(favoritePokemons);
//   }
//   return {};
// }

const initialState: PokemonState = {
  favorites: {},
  // ...getInitialState(),
  // "1": { id: "1", name: "bulbasaur" },
  // "3" : { id: "3", name: "venusaur" },
  // "5" : { id: "5", name: "charmeleon" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }
      localStorage.setItem("favoritePokemons", JSON.stringify(state.favorites));
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
