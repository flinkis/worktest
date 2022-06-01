export interface show {
  averageRuntime: number;
  dvdCountry: string;
  ended?: string;
  externals: {
    imdb: string;
    thetvdb: string;
    tvrage: string;
  };
  id: string;
  name: string;
  image: {
    medium: string;
    original: string;
  };
  genres: string[];
  language: string;
  network: {
    country: {
      code: string;
      name: string;
      timezone: string;
    };

    id: number;
    name: string;
  };
  officialSite?: string;
  premiered: string;
  rating: { average: number };
  runtime: number;
  schedule: {
    days: string[];
    time: string;
  };
  status: string;
  summary: string;
  type: string;
  url: string;
  webChannel?: string;
}

export interface searchResult {
  ratinng: number;
  show: show;
}
