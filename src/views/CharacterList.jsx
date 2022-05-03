import React, { useEffect } from 'react';
import { useState } from 'react';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  console.log(characters);
  return (
    <>
      <div>CharacterList</div>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
        </div>
      ))}
    </>
  );
}
