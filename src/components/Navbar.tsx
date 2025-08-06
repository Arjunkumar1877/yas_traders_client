'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="text-foreground">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-foreground font-bold text-xl">YAS TRADERS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('work-with-us')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer"
            >
              Work With Us
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Shopping Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                </svg>
                <Badge variant="secondary" className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  0
                </Badge>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-muted-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('work-with-us')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Work With Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 