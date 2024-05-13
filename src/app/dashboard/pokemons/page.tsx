"use client";
// Suponiendo que la importación de los tipos está correcta y no se necesita ajustar.

import { PokemonsResponse, SimplePokemon, PokemonGrid } from "@/app/pokemons";
import ErrorComponent from "./error";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data: PokemonsResponse = await response.json();
  // throw new Error("Error al obtener los pokemones");
  // throw notFound();
  return data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
};

export default function PokemonsPage() {
  const [pokemonList, setPokemonList] = useState<SimplePokemon[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemons = async () => {
    try {
      const pokemons = await getPokemons(151);
      setPokemonList(pokemons);
      setError(null); // Reset any previous errors
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  if (error) {
    return (
      <ErrorComponent
        message={error}
        onRetry={() => {
          setError(null); // Limpiar el error
          fetchPokemons(); // Reintentar la solicitud
        }}
      />
    );
  }

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 ">
        {" "}
        Listado de Pokémons <small className="text-blue-500">estático</small>
      </span>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}
