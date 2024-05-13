
import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/app/pokemons";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

export const metadata = {
    title: "Favoritos",
    description: "Página de favoritos",
};

export default function PokemonsPage() {


  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 ">
        {" "}
        Pokémons favoritos <small className="text-blue-500">Global State</small>
      </span>
      <PokemonGrid pokemonList={[]} />
    </div>
  );
}
