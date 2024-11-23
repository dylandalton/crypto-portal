import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://coinranking1.p.rapidapi.com';

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '7fed9efa2fmshd58334dc47ec098p1f6e6ajsnc3a70bc9e35d');
            headers.set('x-rapidapi-host', 'coinranking1.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => `/coins?limit=${count}`,
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => `/coin/${coinId}`,
          }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => `coin/${coinId}/history?timeperiod=${timeperiod}`,
        }),
        getExchanges: builder.query({
            query: () => '/exchanges',
        }),
    })
});


export const { 
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;