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
                        url: '/productCategories',
                        method: 'GET'
                    };
                },
            }),
            fetchProductsByCategory: builder.query({
                query: (category) => {
                    return {
                        url: '/productItems/category',
                        method: 'GET',
                        params: {
                            category: category
                        },
                    };
                },
            }),
        };
    },
});

export const { useFetchProductsQuery, useFetchProductCategoriesQuery, useFetchProductsByCategoryQuery } = productsApi;
export { productsApi };