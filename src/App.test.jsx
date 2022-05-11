import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders Rick and Morty characters and clicks on Morty', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    screen.getByText(/loading.../i);

    await screen.findByText(/Morty Smith/i);
    await screen.findByAltText(/Image of Morty Smith/i);

    const link = await screen.findByText('Morty Smith');
    userEvent.click(link);
    await screen.findByText(/status: alive/i);
  });
  it('displays the details page', async () => {
    render(
      <MemoryRouter initialEntries={['/', '/character/5']} initialIndex={1}>
        <App />
      </MemoryRouter>
    );
    screen.getByText('Back to Home');
    await screen.findByText('Jerry Smith');
    screen.debug();
  });
});
