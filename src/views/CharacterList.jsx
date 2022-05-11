import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useLocation, Link } from 'react-router-dom';
import fetchCharacters from '../services/characters';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const gender = new URLSearchParams(location.search).get('gender') ?? 'all';

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters(gender);
      setCharacters(data);
      setLoading(false);
    };
    fetchData();
  }, [location]);

  const handleGenderSelection = (e) => {
    history.push(`/?gender=${e.target.value}`);
  };

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <select id="gender" value={gender} onChange={handleGenderSelection}>
        <option value="all">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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
              marginTop: '10px',
              marginRight: '10px',
            }}
          >
            <Link to={`/character/${character.id}`}>
              <h3>{character.name}</h3>
            </Link>
            <img src={character.image} alt={`Image of ${character.name}`} />
          </div>
        ))}
      </div>
    </>
  );
}
