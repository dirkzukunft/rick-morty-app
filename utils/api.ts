import { AllCharactersFromAPI } from '../src/types';

export async function getCharacters(): Promise<AllCharactersFromAPI> {
  const url = 'https://rickandmortyapi.com/api/character';
  const response = await fetch(url);
  const data: Promise<AllCharactersFromAPI> = await response.json();
  return data;
}
