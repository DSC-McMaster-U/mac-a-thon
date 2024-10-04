import { render, screen } from '@testing-library/react';
import Header from '@/app/components/header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
