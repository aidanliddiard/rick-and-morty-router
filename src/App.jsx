import CharacterList from './views/CharacterList';
import { Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Switch>
          <Route path="/">
            <CharacterList />
          </Route>
        </Switch>
      </div>
    </>
  );
}
