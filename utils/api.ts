import { AllCharactersFromAPI, Character } from '../src/types';

export async function getCharacters(name = ''): Promise<Character[]> {
  const url = `https://rickandmortyapi.com/api/character?name=${name}`;
  const response = await fetch(url);
  const data: AllCharactersFromAPI = await response.json();
  const charactersFromAPI = data.results;
  const characters = charactersFromAPI.map((characterFromAPI) => {
    const character: Character = {
      name: characterFromAPI.name,
      image: characterFromAPI.image,
      location: characterFromAPI.location.name,
      origin: characterFromAPI.origin.name,
      species: characterFromAPI.species,
      status: characterFromAPI.status,
    };
    return character;
  });
  return characters;
}
