import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.pushState({}, '', '/destination/rajahmundry');
});

test('opens a nearby destination detail page when its image card is clicked', async () => {
  render(<App />);

  const nearbyLink = screen.getByRole('link', { name: /papi hills/i });
  expect(nearbyLink).toHaveAttribute('href', '/nearby-destination/papi-hills');

  fireEvent.click(nearbyLink);

  expect(await screen.findByRole('heading', { level: 1, name: /^papi hills$/i })).toBeInTheDocument();
});
