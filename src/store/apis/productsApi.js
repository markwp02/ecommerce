import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api'
    }),
    endpoints(builder) {
        return {
            fetchProducts: builder.query({
                query: () => {
                    return {
                        url: '/productItems',
                        method: 'GET'
                    };
                },
            }),
            fetchProductCategories: builder.query({
                query: () => {
                    return {
                        url: '/productItems/category',
                        method: 'GET'
                    };
                },
            }),
        };
    },
});

export const { useFetchProductsQuery, useFetchProductCategoriesQuery } = productsApi;
export { productsApi };