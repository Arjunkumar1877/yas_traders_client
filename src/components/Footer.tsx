'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const Footer = () => {
  return (
    <>


      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info & Social Media */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-xl font-bold">YAS TRADERS</span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Premium honey and dry fruits sourced from the finest regions, delivered fresh to your doorstep across India.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
              
              <p className="text-sm text-muted-foreground">
                © 2023 YAS TRADERS. All rights reserved.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link></li>
                <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/work-with-us" className="text-muted-foreground hover:text-primary transition-colors">Work With Us</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Products</h4>
              <ul className="space-y-2">
                <li><Link href="/products/honey" className="text-muted-foreground hover:text-primary transition-colors">Honey</Link></li>
                <li><Link href="/products/dates" className="text-muted-foreground hover:text-primary transition-colors">Dates</Link></li>
                <li><Link href="/products/nuts" className="text-muted-foreground hover:text-primary transition-colors">Nuts</Link></li>
                <li><Link href="/products/dry-fruits" className="text-muted-foreground hover:text-primary transition-colors">Dry Fruits</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Newsletter</h4>
              <p className="text-muted-foreground text-sm">
                Subscribe to receive updates on new products and special offers.
              </p>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-background text-foreground border-border"
                />
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Navigation */}
          <div className="border-t border-border mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Shipping Info
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 