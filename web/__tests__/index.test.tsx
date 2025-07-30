import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home page', () => {
  it('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText(/Добро пожаловать в MyMarketplace/i)).toBeInTheDocument();
  });
});