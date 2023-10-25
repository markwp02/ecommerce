import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from "./apis/productsApi";
import categoriesReducer from "./slices/categoriesSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        categories: categoriesReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productsApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchProductsQuery, useFetchProductCategoriesQuery } from './apis/productsApi';
export { setSelected } from './slices/categoriesSlice';
