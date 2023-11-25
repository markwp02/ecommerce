import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { productsApi } from "./apis/productsApi";
import categoriesReducer from "./slices/categoriesSlice";
import cartReducer from "./slices/cartSlice";
import searchReducer from "./slices/searchSlice";
import { customerOrderApi } from "./apis/customerOrderApi";
import { loginApi } from "./apis/loginApi";
import customerReducer from "./slices/customerSlice";

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [customerOrderApi.reducerPath]: customerOrderApi.reducer,
        [loginApi.reducerPath]: loginApi.reducer,
        categories: categoriesReducer,
        cart: cartReducer,
        customer: customerReducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(productsApi.middleware)
        .concat(customerOrderApi.middleware)
        .concat(loginApi.middleware);
    },
});

setupListeners(store.dispatch);

export { useAddCustomerOrderMutation, useFetchCustomerOrderByIdQuery } from './apis/customerOrderApi';
export { useFetchProductCategoriesQuery, useFetchProductsByCategoryQuery, useFetchProductByIdQuery } from './apis/productsApi';
export { useAuthenticateLoginUserMutation } from './apis/loginApi';
export { setSelected } from './slices/categoriesSlice';
export { addToCart, updateProductQuantity, removeProductFromCart, resetCart } from './slices/cartSlice';
export { setSearchTerm } from './slices/searchSlice';
export { setLoggedInCustomer, removeLoggedOutCustomer } from './slices/customerSlice';