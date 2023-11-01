import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from "./apis/productsApi";
import categoriesReducer from "./slices/categoriesSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        categories: categoriesReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productsApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchProductsQuery, useFetchProductCategoriesQuery, useFetchProductsByCategoryQuery, useFetchProductByIdQuery } from './apis/productsApi';
export { setSelected } from './slices/categoriesSlice';
export { addToCart } from './slices/cartSlice';