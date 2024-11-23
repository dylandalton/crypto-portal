import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    
    baseQuery: fetchBaseQuery({
        baseUrl,
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '7fed9efa2fmshd58334dc47ec098p1f6e6ajsnc3a70bc9e35d');
            headers.set('x-rapidapi-host', 'bing-news-search1.p.rapidapi.com');
            headers.set('X-BingApis-SDK', 'true');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        })
    })
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;