'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  ShoppingCart, 
  Menu, 
  X,
  Home,
  Package,
  Users,
  Briefcase,
  Phone
} from 'lucide-react';

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
                <Star className="w-6 h-6" />
              </div>
              <span className="text-foreground font-bold text-xl">YAS TRADERS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer flex items-center space-x-1"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer flex items-center space-x-1"
            >
              <Package className="w-4 h-4" />
              <span>Products</span>
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer flex items-center space-x-1"
            >
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </button>
            <button 
              onClick={() => scrollToSection('work-with-us')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer flex items-center space-x-1"
            >
              <Briefcase className="w-4 h-4" />
              <span>Work With Us</span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-muted-foreground transition-colors font-medium cursor-pointer flex items-center space-x-1"
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Shopping Cart */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-muted-foreground">
                <ShoppingCart className="w-6 h-6" />
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
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center space-x-2"
              >
                <Package className="w-4 h-4" />
                <span>Products</span>
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>About Us</span>
              </button>
              <button
                onClick={() => scrollToSection('work-with-us')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center space-x-2"
              >
                <Briefcase className="w-4 h-4" />
                <span>Work With Us</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-muted-foreground block px-3 py-2 rounded-md text-base font-medium w-full text-left flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 