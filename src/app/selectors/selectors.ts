import { RootState } from "@/store";
import { createSelector } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

// Selector para obtener todos los Pokémon favoritos
export const selectFavoritePokemons = createSelector(
  (state: RootState) => state.pokemons,
  (pokemons: { [key: string]: SimplePokemon }) => Object.values(pokemons)
);
