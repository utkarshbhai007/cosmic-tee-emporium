
import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Instagram, Mail, Phone, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="border-t border-accent/20 bg-background">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-cosmic-yellow animate-pulse-star" />
              <span className="font-comic text-xl text-primary">Cosmic Tees</span>
            </Link>
            <p className="text-sm text-foreground/70 mb-6">
              Unleash your inner hero with our limited-edition comic-inspired t-shirts. 
              Quality craftsmanship with cosmic designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  All T-shirts
                </Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/best-sellers" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Best Sellers
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Sale
                </Link>
              </li>
              <li>
                <Link to="/gift-cards" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Join Our Universe</h3>
            <p className="text-sm text-foreground/70 mb-4">
              Subscribe to receive updates, exclusive offers, and cosmic news!
            </p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background/50"
              />
              <Button>Subscribe</Button>
            </div>
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>support@cosmictees.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Comic City, Universe 616</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/50">
            &copy; {new Date().getFullYear()} Cosmic Tees. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/faq" className="text-sm text-foreground/50 hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
