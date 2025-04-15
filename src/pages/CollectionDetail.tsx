
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star, ArrowLeft } from 'lucide-react';

// Sample collection data
const collectionsData = {
  'multiverse': {
    name: 'Multiverse Collection',
    description: 'Our exclusive Multiverse Collection brings together the most iconic superhero designs from across parallel universes. Each t-shirt is crafted with premium materials and features vibrant, detailed artwork that brings your favorite characters to life.',
    banner: 'https://images.unsplash.com/photo-1612356689457-806f07e4ca8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        id: 1,
        name: 'Spider-Verse Tee',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1583744946564-b52d01a7b321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.8,
        isNew: true,
      },
      {
        id: 2,
        name: 'Quantum Realm',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.6,
        isNew: false,
      },
      {
        id: 3,
        name: 'Multiverse Guardian',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        isNew: true,
      },
      {
        id: 4,
        name: 'Reality Shifter',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        isNew: false,
      },
    ]
  },
  'cosmic-heroes': {
    name: 'Cosmic Heroes',
    description: 'Space-themed designs featuring heroes with cosmic powers and galactic adventures. These t-shirts showcase the epic battles and journeys of heroes across the cosmos.',
    banner: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    products: [
      {
        id: 5,
        name: 'Galactic Guardian',
        price: 28.99,
        image: 'https://images.unsplash.com/photo-1583744946564-b52d01a7b321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.5,
        isNew: false,
      },
      {
        id: 6,
        name: 'Stellar Knight',
        price: 31.99,
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        rating: 4.7,
        isNew: true,
      }
    ]
  },
};

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const collection = id ? collectionsData[id as keyof typeof collectionsData] : null;

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col">
        <StarryBackground />
        <Navbar />
        <main className="flex-grow py-12">
          <div className="container px-4 mx-auto text-center">
            <h1 className="text-4xl font-comic text-white mb-6">Collection Not Found</h1>
            <p className="text-lg text-foreground/70 mb-8">Sorry, we couldn't find the collection you're looking for.</p>
            <Button asChild>
              <Link to="/collections">Return to Collections</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/collections" className="hover:text-primary transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-foreground/90">{collection.name}</span>
          </div>

          {/* Collection Banner */}
          <div className="relative mb-12 overflow-hidden rounded-lg">
            <img 
              src={collection.banner} 
              alt={collection.name}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h1 className="text-4xl font-comic text-white mb-2">{collection.name}</h1>
              <p className="text-foreground/90 max-w-2xl">{collection.description}</p>
            </div>
          </div>

          {/* Products */}
          <h2 className="text-2xl font-comic text-white mb-6">Products in this Collection</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collection.products.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="cosmic-card group h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {product.isNew && (
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-cosmic-hero-blue text-white">New</Badge>
                      </div>
                    )}
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                      <Button size="icon" variant="secondary" className="rounded-full mr-2">
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="rounded-full">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="flex-grow p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-cosmic-hero-yellow text-cosmic-hero-yellow" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-0 pb-4 px-4">
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link to="/collections" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Collections
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionDetail;
