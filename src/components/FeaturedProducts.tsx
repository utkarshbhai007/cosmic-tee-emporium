
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star } from 'lucide-react';

// Sample product data (in a real app, this would come from an API)
const featuredProducts = [
  {
    id: 1,
    name: 'Spider-Verse Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Marvel',
    rating: 4.8,
    isNew: true,
    discount: 0,
  },
  {
    id: 2,
    name: 'Gotham Knight',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'DC Comics',
    rating: 4.6,
    isNew: false,
    discount: 10,
  },
  {
    id: 3,
    name: 'Cosmic Galaxy',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1618517351616-38fb9c5210c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Space',
    rating: 4.7,
    isNew: true,
    discount: 0,
  },
  {
    id: 4,
    name: 'Hero Academy',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Anime',
    rating: 4.9,
    isNew: false,
    discount: 15,
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-comic text-white mb-2">Featured T-Shirts</h2>
            <p className="text-foreground/70">Our most popular designs this week</p>
          </div>
          <Link to="/products" className="mt-4 md:mt-0 text-primary hover:text-primary/80 transition-colors">
            View all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="cosmic-card group h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Product Image */}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-2 left-2 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-cosmic-hero-blue text-white">New</Badge>
                    )}
                    {product.discount > 0 && (
                      <Badge className="bg-cosmic-hero-red text-white">-{product.discount}%</Badge>
                    )}
                  </div>
                  
                  {/* Quick actions */}
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
                    <div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-foreground/60">{product.category}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-cosmic-hero-yellow text-cosmic-hero-yellow" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 pb-4 px-4">
                  <div className="w-full flex items-center justify-between">
                    <div>
                      {product.discount > 0 ? (
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold">
                            ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                          </span>
                          <span className="text-sm text-foreground/60 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      ) : (
                        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
