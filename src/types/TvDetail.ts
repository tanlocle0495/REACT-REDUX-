export interface TVDetail {
  backdrop_path: string;
  created_by: CreatedBy[];
  episode_run_time: number[];
  first_air_date: string;
  genres: Genre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: TEpisodeToAir;
  name: string;
  next_episode_to_air: TEpisodeToAir;
  networks: Network[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Network[];
  production_countries: ProductionCountry[];
  seasons: Season[];
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface CreatedBy {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface TEpisodeToAir {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: null | string;
  vote_average: number;
  vote_count: number;
}

export interface Network {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface Season {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export const the_mandalorian: TVDetail = {
  backdrop_path: '/9ijMGlJKqcslswWUzTEwScm82Gs.jpg',
  created_by: [
    {
      id: 15277,
      credit_id: '5bb6f5c39251410dc601d77f',
      name: 'Jon Favreau',
      gender: 2,
      profile_path: '/8MtRRnEHaBSw8Ztdl8saXiw1egP.jpg',
    },
  ],
  episode_run_time: [35, 48],
  first_air_date: '2019-11-12',
  genres: [
    {
      id: 10765,
      name: 'Sci-Fi & Fantasy',
    },
    {
      id: 10759,
      name: 'Action & Adventure',
    },
    {
      id: 37,
      name: 'Western',
    },
  ],
  homepage: 'https://www.disneyplus.com/series/the-mandalorian/3jLIGMDYINqD',
  id: 82856,
  in_production: true,
  languages: ['en'],
  last_air_date: '2020-12-11',
  last_episode_to_air: {
    air_date: '2020-12-11',
    episode_number: 7,
    id: 2464380,
    name: 'Chapter 15: The Believer',
    overview:
      'To move against the Empire, the Mandalorian needs the help of an old enemy.',
    production_code: '',
    season_number: 2,
    still_path: '/bTzhzNSVFugIyc8pHutmLCJdgv5.jpg',
    vote_average: 8.5,
    vote_count: 2,
  },
  name: 'The Mandalorian',
  next_episode_to_air: {
    air_date: '2020-12-18',
    episode_number: 8,
    id: 2464381,
    name: 'Chapter 16',
    overview: '',
    production_code: '',
    season_number: 2,
    still_path: null,
    vote_average: 0,
    vote_count: 0,
  },
  networks: [
    {
      name: 'Disney+',
      id: 2739,
      logo_path: '/gJ8VX6JSu3ciXHuC2dDGAo2lvwM.png',
      origin_country: 'US',
    },
  ],
  number_of_episodes: 16,
  number_of_seasons: 2,
  origin_country: ['US'],
  original_language: 'en',
  original_name: 'The Mandalorian',
  overview:
    'After the fall of the Galactic Empire, lawlessness has spread throughout the galaxy. A lone gunfighter makes his way through the outer reaches, earning his keep as a bounty hunter.',
  popularity: 2395.189,
  poster_path: '/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg',
  production_companies: [
    {
      id: 1,
      logo_path: '/o86DbpburjxrqAzEDhXZcyE8pDb.png',
      name: 'Lucasfilm Ltd.',
      origin_country: 'US',
    },
    {
      id: 109755,
      logo_path: '/hUCbTgfDPp1sIo8BOI0AaOMx1Si.png',
      name: 'Walt Disney Studios',
      origin_country: 'US',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  seasons: [
    {
      air_date: '2019-11-12',
      episode_count: 8,
      id: 110346,
      name: 'Season 1',
      overview:
        'A lone gunfighter makes his way through the outer reaches of the galaxy, far from the authority of the New Republic.',
      poster_path: '/sUTqIb82LxYhPT0SfI8AR03GLpz.jpg',
      season_number: 1,
    },
    {
      air_date: '2020-10-30',
      episode_count: 8,
      id: 153254,
      name: 'Season 2',
      overview:
        'The Mandalorian and the Child continue their journey, facing enemies and rallying allies as they make their way through a dangerous galaxy in the tumultuous era after the collapse of the Galactic Empire.',
      poster_path: '/b8cs9DzhxRQLQ7TvfLihYbAC6fg.jpg',
      season_number: 2,
    },
  ],
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
  ],
  status: 'Returning Series',
  tagline: 'Bounty hunting is a complicated profession.',
  type: 'Scripted',
  vote_average: 8.5,
  vote_count: 3761,
} as TVDetail;
