import { response } from 'msw';

export default async function fetchCharacters(gender) {
  const url =
    gender === 'all' || !gender
      ? 'https://rickandmortyapi.com/api/character'
      : `https://rickandmortyapi.com/api/character?gender=${gender}`;
  const data = await fetch(url);
  const { results } = await data.json();
  return results;
}

export async function fetchCharacter(id) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const data = await response.json();
  return data;
}
