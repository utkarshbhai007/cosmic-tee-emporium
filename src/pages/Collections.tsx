
import React from 'react';
import { Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 'multiverse',
    name: 'Multiverse Collection',
    description: 'Explore designs from across parallel universes featuring iconic superheroes in unique multiversal styles.',
    image: 'https://images.unsplash.com/photo-1612356689457-806f07e4ca8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 12,
  },
  {
    id: 'cosmic-heroes',
    name: 'Cosmic Heroes',
    description: 'Space-themed designs featuring heroes with cosmic powers and galactic adventures.',
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 8,
  },
  {
    id: 'villains',
    name: 'Iconic Villains',
    description: 'Celebrate the most memorable antagonists from comics and pop culture with these edgy designs.',
    image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 10,
  },
  {
    id: 'retro',
    name: 'Retro Comics',
    description: 'Vintage-inspired designs celebrating the golden and silver age of comic books.',
    image: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    count: 15,
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          <h1 className="text-4xl font-comic text-white mb-6">Our Collections</h1>
          <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
            Discover our specially curated collections of superhero-themed t-shirts. Each collection 
            tells a unique story through stunning artwork and premium quality fabrics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link 
                key={collection.id} 
                to={`/collections/${collection.id}`} 
                className="group"
              >
                <Card className="cosmic-card overflow-hidden h-full transition-all duration-300 hover:shadow-accent/30">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h2 className="text-2xl font-comic text-white group-hover:text-primary transition-colors">
                        {collection.name}
                      </h2>
                      <span className="text-sm bg-secondary px-2 py-1 rounded-md">
                        {collection.count} items
                      </span>
                    </div>
                    <p className="text-foreground/70 mb-4">{collection.description}</p>
                    <Button className="group" variant="link" size="sm">
                      Explore Collection
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
