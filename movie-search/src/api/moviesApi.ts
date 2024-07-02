import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<
      ISearchResult,
      { searchTerm: string; page?: number }
    >({
      query: ({ searchTerm, page }) =>
        `?s=${searchTerm}&page=${page}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs?.searchTerm}`;
      },
      merge: (currentCache, response) => {
        const uniqueMovies = response.Search.filter(
          (movie) =>
            !currentCache?.Search.some(
              (cachedMovie) => cachedMovie.imdbID === movie.imdbID
            )
        );
        return {
          Search: [...currentCache?.Search, ...uniqueMovies],
          totalResults: response.totalResults,
          Response: response.Response,
        };
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getMovieById: builder.query<IMovie, string | undefined>({
      query: (movieId) =>
        `?i=${movieId}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = moviesApi;
