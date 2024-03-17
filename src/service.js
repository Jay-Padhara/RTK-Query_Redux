import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApiData = createApi({
    reducerPath: 'getApiData',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getalldata: builder.query({
            query: () => ({
                url: 'posts',
                method: 'get',
            }),
        }),

        getdatabyid: builder.query({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'get',
            }),
        }),

        addnewdata: builder.mutation({
            query: (data) => ({
                url: 'posts',
                method: 'post',
                body: data,
            }),
        }),

        deletedata: builder.mutation({
            query: (id) => ({
                url: `posts/${id}`,
                method: 'delete',
            }),
        }),
    }),
});

export const { useGetalldataQuery, useGetdatabyidQuery, useAddnewdataMutation, useDeletedataMutation } = getApiData;