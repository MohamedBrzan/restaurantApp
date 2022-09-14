import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CategoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://express.yalago.net/api/vendor',
  }),
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => '/12334/categories',
    }),
  }),
});

export const { useGetCategoryQuery } = CategoryApi;

export default CategoryApi;
