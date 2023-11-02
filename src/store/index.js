import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from "./apis/productsApi";
import categoriesReducer from "./slices/categoriesSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        categories: categoriesReducer,
        cart: cartReducer,
        search: searchReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productsApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchProductCategoriesQuery, useFetchProductsByCategoryQuery, useFetchProductByIdQuery } from './apis/productsApi';
export { setSelected } from './slices/categoriesSlice';
export { addToCart, updateProductQuantity, removeProductFromCart } from './slices/cartSlice';
export { setSearchTerm } from './slices/searchSlice';