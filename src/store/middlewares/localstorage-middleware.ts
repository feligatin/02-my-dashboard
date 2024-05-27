import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";


export const localstorageMiddleware = (state: MiddlewareAPI) => {

    return (next: Dispatch) => (action: Action) => {
        next(action);
        if(action.type === 'pokemons/toggleFavorite') {
            const favoritePokemons = state.getState().pokemons;
            localStorage.setItem("favoritePokemons", JSON.stringify(favoritePokemons));
            return;
        }
        // console.log({state: state.getState()

    };
}