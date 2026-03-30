import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from '../../components/Header';

describe('Header component', () => {
  it('renders desktop links', () => {
    render(<Header />);
    const desktopNav = document.querySelector('.hidden.md\\:flex');
    expect(desktopNav).toBeInTheDocument();
    if (desktopNav) {
      expect(desktopNav.textContent).toContain('Ana Sayfa');
      expect(desktopNav.textContent).toContain('Turlar');
      expect(desktopNav.textContent).toContain('Hakkımızda');
      expect(desktopNav.textContent).toContain('İletişim');
    }
  });

  it('initially does not show the mobile menu', () => {
    render(<Header />);
    const mobileMenu = document.querySelector('.md\\:hidden.py-4.space-y-2');
    expect(mobileMenu).not.toBeInTheDocument();
  });

  it('opens mobile menu on button click', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const menuButton = screen.getByRole('button');

    // Initially closed
    expect(document.querySelector('.md\\:hidden.py-4.space-y-2')).not.toBeInTheDocument();

    // Click to open
    await user.click(menuButton);
    const mobileMenu = document.querySelector('.md\\:hidden.py-4.space-y-2');
    expect(mobileMenu).toBeInTheDocument();
    if (mobileMenu) {
      expect(mobileMenu.textContent).toContain('Ana Sayfa');
    }
  });

  it('closes mobile menu on clicking the button again', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const menuButton = screen.getByRole('button');

    // Open menu
    await user.click(menuButton);
    expect(document.querySelector('.md\\:hidden.py-4.space-y-2')).toBeInTheDocument();

    // Click again to close
    await user.click(menuButton);
    expect(document.querySelector('.md\\:hidden.py-4.space-y-2')).not.toBeInTheDocument();
  });

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup();
    render(<Header />);
    const menuButton = screen.getByRole('button');

    // Open menu
    await user.click(menuButton);
    const mobileMenu = document.querySelector('.md\\:hidden.py-4.space-y-2');
    expect(mobileMenu).toBeInTheDocument();

    if (mobileMenu) {
      // Find a link inside the mobile menu
      const anaSayfaLink = Array.from(mobileMenu.querySelectorAll('a')).find(el => el.textContent === 'Ana Sayfa');
      expect(anaSayfaLink).toBeDefined();

      // Click the link
      if (anaSayfaLink) {
        await user.click(anaSayfaLink);
      }

      // Menu should be closed
      expect(document.querySelector('.md\\:hidden.py-4.space-y-2')).not.toBeInTheDocument();
    }
  });
});
