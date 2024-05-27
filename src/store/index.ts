import { Middleware, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import pokemonsReducer from './pokemons/pokemons';

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { localstorageMiddleware } from './middlewares/localstorage-middleware';

// Configuración de la tienda (store)
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localstorageMiddleware as Middleware),
});

// Inferir los tipos `RootState` y `AppDispatch` de la tienda
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Definir hooks personalizados con los tipos
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
