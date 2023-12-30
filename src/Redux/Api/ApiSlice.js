import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api/",
  }),

  endpoints: (builder) => ({
    GetUsers: builder.query({
      query: () => {
        return `users`;
      },
    }),
    GetResource: builder.query({
      query: () => {
        return `unknown`;
      },
    }),

    Authenication: builder.mutation({
      query: ({ body, url }) => {
        return {
          url,
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const {
  useAuthenicationMutation,
  useGetUsersQuery,
  useGetResourceQuery,
} = apiSlice;
