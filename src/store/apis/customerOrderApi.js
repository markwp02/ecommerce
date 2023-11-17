import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const customerOrderApi = createApi({
    reducerPath: 'customerOrder',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api'
    }),
    endpoints(builder) {
        return {
            addCustomerOrder: builder.mutation({
                query: (customerOrder) => {
                    return {
                        url: '/customerOrders',
                        method: 'POST',
                        body: {
                            customerOrderTotalPrice: customerOrder.customerOrderTotalPrice,
                            orderProducts: customerOrder.orderProducts,
                        }
                    }
                },
            }),
            fetchCustomerOrderById: builder.query({
                query: (customerOrderId) => {
                    return {
                        url: `/customerOrders/${customerOrderId}`,
                        method: 'GET',
                    };
                },
            }),
        }
    },
});

export const { useAddCustomerOrderMutation, useFetchCustomerOrderByIdQuery } = customerOrderApi;
export { customerOrderApi };