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
      {characters.map((character) => (
        <div
          key={character.id}
          style={{
            display: 'flex',
            backgroundColor: 'beige',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '350px',
            border: '1px solid black',
            paddingBottom: '20px',
            marginBottom: '10px',
            marginRight: '10px',
          }}
        >
          <h3>{character.name}</h3>
          <img src={character.image} alt={`Image of ${character.name}`} />
        </div>
      ))}
    </>
  );
}
