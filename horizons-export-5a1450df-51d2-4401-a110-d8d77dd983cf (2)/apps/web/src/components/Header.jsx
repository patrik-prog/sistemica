
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Početna' },
    { path: '/obiteljska-terapija', label: 'Obiteljsko i partnersko savjetovanje' },
    { path: '/individualna-terapija', label: 'Individualno savjetovanje' },
    { path: '/blog', label: 'Blog' },
    { path: '/o-meni', label: 'O meni' },
    { path: '/kontakt', label: 'Kontakt' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-20 py-4 items-center justify-between flex-wrap gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src="https://horizons-cdn.hostinger.com/5a1450df-51d2-4401-a110-d8d77dd983cf/209416cc89d3ac1cd4f064aab7dfb8de.png" 
              alt="Sjetemica entar Logo" 
              className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Navigation - Visible on all screens */}
          <nav className="flex items-center flex-wrap gap-1 sm:gap-2 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
