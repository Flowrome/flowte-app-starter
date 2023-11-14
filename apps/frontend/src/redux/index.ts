import { combineReducers, configureStore } from "@reduxjs/toolkit";
import type { PreloadedState } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import api from "./api";
import reducers from "./reducers";

/* eslint-disable @typescript-eslint/no-explicit-any */
const apiReducers: any = {};
let apiMiddlewares: any = [];

Object.keys(api).forEach((key) => {
  apiReducers[key] = (api as any)[key].reducer;
  apiMiddlewares = [...apiMiddlewares, (api as any)[key].middleware];
});
/* eslint-enable @typescript-eslint/no-explicit-any */

const rootReducer = combineReducers({
  ...apiReducers,
  ...reducers
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([...apiMiddlewares]),
    // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
