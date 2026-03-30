import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../../components/SearchBar';

describe('SearchBar Component', () => {
  it('renders the search input and button', () => {
    render(<SearchBar />);

    // Check if input exists
    const inputElement = screen.getByPlaceholderText('Bir ya da daha fazla kelime ile arama yapabilirsiniz');
    expect(inputElement).toBeInTheDocument();

    // Check if button exists
    const buttonElement = screen.getByRole('button', { name: /ara/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('allows user to type in the input', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    const inputElement = screen.getByPlaceholderText('Bir ya da daha fazla kelime ile arama yapabilirsiniz');

    await user.type(inputElement, 'Kapadokya turu');
    expect(inputElement).toHaveValue('Kapadokya turu');
  });

  it('button is clickable', async () => {
    const user = userEvent.setup();
    render(<SearchBar />);

    const buttonElement = screen.getByRole('button', { name: /ara/i });

    // Just verify it doesn't throw when clicked
    await user.click(buttonElement);
  });
});
