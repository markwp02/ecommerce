import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const loginApi = createApi({
    reducerPath: 'login',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api'
    }),
    endpoints(builder) {
        return {
            authenticateLoginUser: builder.mutation({
                query: (customer) => {
                    return {
                        url: '/login',
                        method: 'POST',
                        body: {
                            customerUsername: customer.customerUsername,
                            customerPassword: customer.customerPassword,
                        }
                    }
                },
            }),
        }
    },
});

export const { useAuthenticateLoginUserMutation, useFetchCustomerOrderByIdQuery } = loginApi;
export { loginApi };