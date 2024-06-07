"use client"

import { Provider } from "react-redux";
import { store } from ".";
import { use, useEffect } from "react";

interface ProvidersProps {
 children: React.ReactNode;
}

export const Providers = ({children }: ProvidersProps) => {

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favoritePokemons") ?? "{}");
    store.dispatch({ type: "pokemons/setFavoritePokemons", payload: favorites });
  }, []);

  return (
    <Provider store = {store}>
        { children}</Provider>
  )
}
