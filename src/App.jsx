import CharacterList from './views/CharacterList';

export default function App() {
  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <CharacterList />
      </div>
    </>
  );
}
