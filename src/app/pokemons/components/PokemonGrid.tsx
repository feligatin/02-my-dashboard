import { PokemonCard } from "./PokemonCard";
import { SimplePokemon } from "../interfaces/simple-pokemons";

interface Props {
  pokemonList: SimplePokemon[];
}

export const PokemonGrid = ({ pokemonList }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};
