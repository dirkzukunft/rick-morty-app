export type Character = {
  name: string;
  status: string;
  species: string;
  origin: string;
  location: string;
  image: string;
};

export type AllCharactersFromAPI = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: CharacterFromAPI[];
};

export type CharacterFromAPI = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
