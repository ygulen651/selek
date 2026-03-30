import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './page';

// Mock child components to isolate tests to Home component's rendering
jest.mock('@/components/Header', () => {
  return function MockHeader() {
    return <header data-testid="mock-header">Header</header>;
  };
});

jest.mock('@/components/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="mock-footer">Footer</footer>;
  };
});

jest.mock('@/components/HeroSlider', () => {
  return function MockHeroSlider() {
    return <div data-testid="mock-hero-slider">HeroSlider</div>;
  };
});

jest.mock('@/components/SearchBar', () => {
  return function MockSearchBar() {
    return <div data-testid="mock-search-bar">SearchBar</div>;
  };
});

jest.mock('@/components/QuickLinks', () => {
  return function MockQuickLinks() {
    return <div data-testid="mock-quick-links">QuickLinks</div>;
  };
});

jest.mock('@/components/ModernTourCard', () => {
  return function MockModernTourCard({ title }: { title: string }) {
    return <div data-testid="mock-modern-tour-card">{title}</div>;
  };
});

jest.mock('@/components/Services', () => {
  return function MockServices() {
    return <div data-testid="mock-services">Services</div>;
  };
});

jest.mock('@/components/ModernFeatures', () => {
  return function MockModernFeatures() {
    return <div data-testid="mock-modern-features">ModernFeatures</div>;
  };
});

describe('Home Component', () => {
  it('renders the main layout components correctly', () => {
    render(<Home />);

    // Check main layout
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders all the child sections in the correct order', () => {
    render(<Home />);

    expect(screen.getByTestId('mock-hero-slider')).toBeInTheDocument();
    expect(screen.getByTestId('mock-search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('mock-quick-links')).toBeInTheDocument();

    // Check Featured Tours Section
    expect(screen.getByText('Güncel Konaklamalı Turlar')).toBeInTheDocument();
    expect(screen.getByText('Tümünü Gör →')).toBeInTheDocument();

    // Verify that the right number of ModernTourCards are rendered based on mock data
    const tourCards = screen.getAllByTestId('mock-modern-tour-card');
    expect(tourCards).toHaveLength(4);

    // Verify some titles of the featured tours are passed to the cards
    expect(screen.getByText('GAP (GÜNEYDOĞU) TURU')).toBeInTheDocument();
    expect(screen.getByText('İSTANBUL ADALAR TURU')).toBeInTheDocument();
    expect(screen.getByText('BUTİK EGE TURU (Ara Tatil)')).toBeInTheDocument();
    expect(screen.getByText('KARADENİZ & BATUM TURU')).toBeInTheDocument();

    expect(screen.getByTestId('mock-services')).toBeInTheDocument();
    expect(screen.getByTestId('mock-modern-features')).toBeInTheDocument();
  });

  it('renders the statistics section correctly', () => {
    render(<Home />);

    // Test the statistics
    expect(screen.getByText('2500+')).toBeInTheDocument();
    expect(screen.getByText('Mutlu Müşteri')).toBeInTheDocument();

    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Ülke')).toBeInTheDocument();

    expect(screen.getByText('300+')).toBeInTheDocument();
    expect(screen.getByText('Tur Paketi')).toBeInTheDocument();

    expect(screen.getByText('15+')).toBeInTheDocument();
    expect(screen.getByText('Yıllık Deneyim')).toBeInTheDocument();
  });
});
