import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Rick and Morty characters', async () => {
    render(<App />);

    screen.getByText(/loading.../i);

    await screen.findByText(/Morty Smith/i);
    screen.debug();
  });
});
