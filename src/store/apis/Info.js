import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const InfoApi = createApi({
  reducerPath: 'infoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://express.yalago.net/api/vendor',
  }),
  endpoints: (builder) => ({
    getInfo: builder.query({
      query: () => '/12334/info',
    }),
  }),
});

export const { useGetInfoQuery } = InfoApi;

export default InfoApi;
