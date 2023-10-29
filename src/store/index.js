import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from "./apis/productsApi";
import categoriesReducer from "./slices/categoriesSlice";
import productDetailReducer from "./slices/productDetailSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        categories: categoriesReducer,
        productDetail: productDetailReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productsApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useFetchProductsQuery, useFetchProductCategoriesQuery, useFetchProductsByCategoryQuery } from './apis/productsApi';
export { setSelected } from './slices/categoriesSlice';
export { setSelectedProduct } from './slices/productDetailSlice';
