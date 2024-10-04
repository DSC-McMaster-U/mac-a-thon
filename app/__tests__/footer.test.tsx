import { render, screen } from '@testing-library/react';
import Footer from '@/app/components/footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    const headerElement = screen.getByTestId('footer');
    expect(headerElement).toBeInTheDocument();
  });
});
