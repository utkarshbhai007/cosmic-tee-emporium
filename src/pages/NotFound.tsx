
import React from 'react';
import { Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container px-4 mx-auto text-center">
          <div className="comic-panel max-w-md mx-auto p-8">
            <h1 className="font-comic text-8xl text-cosmic-hero-red mb-2">404</h1>
            <h2 className="font-comic text-2xl text-black mb-6">PAGE NOT FOUND!</h2>
            <p className="text-gray-700 mb-8">
              Oops! Looks like this page has vanished into another dimension.
              Our cosmic heroes are searching for it right now!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black/10">
                <Link to="/products" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Browse Products
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
