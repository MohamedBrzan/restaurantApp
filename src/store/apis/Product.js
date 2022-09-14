import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ProductApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://express.yalago.net/api/vendor',
  }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => '/12334/product/4036',
    }),
  }),
});

export const { useGetProductQuery } = ProductApi;

export default ProductApi;
