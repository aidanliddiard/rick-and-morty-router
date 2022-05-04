import CharacterList from './views/CharacterList';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './views/CharacterDetail';

export default function App() {
  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <Switch>
        <Route path="/character/:id">
          <CharacterDetail />
        </Route>
        <Route path="/">
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}
