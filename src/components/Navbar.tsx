
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Menu, X, Star, User } from "lucide-react";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = 2; // For demo purposes, later you'd connect this to a state/context

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-accent/20 bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Star className="h-6 w-6 text-cosmic-yellow animate-pulse-star" />
          </div>
          <span className="font-comic text-xl sm:text-2xl text-primary">Cosmic Tees</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/products" 
            className={`transition-colors ${isActive('/products') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
          >
            All T-shirts
          </Link>
          <Link 
            to="/collections" 
            className={`transition-colors ${isActive('/collections') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
          >
            Collections
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${isActive('/about') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
          >
            About Us
          </Link>
        </div>

        {/* Search, Cart, User Actions */}
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center gap-2 animate-comic-zoom">
              <Input 
                placeholder="Search for tees..." 
                className="w-full md:w-64 h-9"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button 
              size="icon" 
              variant="ghost" 
              onClick={() => setIsSearchOpen(true)}
              className="text-foreground/90 hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Link to="/cart">
            <Button 
              size="icon" 
              variant="ghost" 
              className={`relative ${isActive('/cart') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-cosmic-hero-red text-white"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </Link>

          <Link to="/login">
            <Button 
              size="icon" 
              variant="ghost" 
              className={`${isActive('/login') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
            >
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                className="md:hidden text-foreground/90 hover:text-primary"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card border-accent/20">
              <div className="flex flex-col gap-4 mt-8">
                <Link 
                  to="/products" 
                  className={`py-2 border-b border-accent/20 ${isActive('/products') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
                >
                  All T-shirts
                </Link>
                <Link 
                  to="/collections" 
                  className={`py-2 border-b border-accent/20 ${isActive('/collections') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
                >
                  Collections
                </Link>
                <Link 
                  to="/about" 
                  className={`py-2 border-b border-accent/20 ${isActive('/about') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
                >
                  About Us
                </Link>
                <Link 
                  to="/cart" 
                  className={`py-2 border-b border-accent/20 ${isActive('/cart') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
                >
                  Cart
                </Link>
                <Link 
                  to="/login" 
                  className={`py-2 border-b border-accent/20 ${isActive('/login') ? 'text-primary' : 'text-foreground/90 hover:text-primary'}`}
                >
                  Login / Register
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
