"use client"
import { PokemonGrid } from "@/app/pokemons";
import { selectFavoritePokemons } from "@/app/selectors/selectors";
import { useAppSelector } from "@/store";
import { useState } from "react";




export default function PokemonsPage() {
  const favoritePokemons = useAppSelector(selectFavoritePokemons);
  const [pokemons, setPokemons] = useState (favoritePokemons);

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokémons favoritos <small className="text-blue-500">Global State</small>
      </span>
      {
        pokemons.length === 0 && <NoFavorites />
      }
      <PokemonGrid pokemonList={pokemons} />
    </div>
  );
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-5xl my-2">No hay pokémons favoritos</span>
    </div>
  );
}
