import { render, screen } from '@testing-library/react';
import Header from '@/app/components/header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
  });

  it('contains the correct links', () => {
    render(<Header />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const eventsLink = screen.getByRole('link', { name: /events/i });
    const newslettersLink = screen.getByRole('link', { name: /newsletters/i });

    expect(homeLink).toBeInTheDocument();
    expect(eventsLink).toBeInTheDocument();
    expect(newslettersLink).toBeInTheDocument();

    expect(homeLink).toHaveAttribute('href', '/');
    expect(eventsLink).toHaveAttribute('href', '/events');
    expect(newslettersLink).toHaveAttribute('href', '/newsletters');
  });
});
