import { screen, render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Rick and Morty characters', async () => {
    render(<App />);

    screen.getByText(/loading.../i);

    await screen.findByText(/Morty Smith/i);
    await screen.findByAltText(/Image of Morty Smith/i);

    userEvent.click(link);
    await screen.findByText(/status: alive/i);

    screen.debug();
  });
});
