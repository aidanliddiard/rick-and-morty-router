import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchCharacter } from '../services/characters';

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    const fetchData = async () => {
      const data = await fetchCharacter(id);
      setCharacter(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <Link to="/">Back to Home</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
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
            marginTop: '10px',

            marginRight: '10px',
          }}
        >
          <h3>{character.name}</h3>
          <img src={character.image} alt={`Image of ${character.name}`} />
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      )}
    </>
  );
}
