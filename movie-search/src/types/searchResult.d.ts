interface ISearchResult {
  Search: Pick<IMovie, "Title" | "Year" | "imdbID" | "Type" | "Poster">[];
  totalResults: string;
  Response: string;
  Error?: string;
}
