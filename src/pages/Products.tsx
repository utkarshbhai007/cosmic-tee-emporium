
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  SlidersHorizontal, 
  ChevronDown, 
  Grid2X2, 
  List 
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';

// Sample products data
const products = [
  {
    id: 1,
    name: 'Spider-Verse Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1583744946564-b52d01a7b321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Marvel',
    collection: 'Multiverse',
    rating: 4.8,
    isNew: true,
    discount: 0,
  },
  {
    id: 2,
    name: 'Gotham Knight',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'DC Comics',
    collection: 'Dark Heroes',
    rating: 4.6,
    isNew: false,
    discount: 10,
  },
  {
    id: 3,
    name: 'Cosmic Galaxy',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Space',
    collection: 'Cosmic Heroes',
    rating: 4.7,
    isNew: true,
    discount: 0,
  },
  {
    id: 4,
    name: 'Hero Academy',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Anime',
    collection: 'Anime Heroes',
    rating: 4.9,
    isNew: false,
    discount: 15,
  },
  {
    id: 5,
    name: 'Stark Industries',
    price: 31.99,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Marvel',
    collection: 'Tech Heroes',
    rating: 4.7,
    isNew: false,
    discount: 0,
  },
  {
    id: 6,
    name: 'Wakanda Forever',
    price: 33.99,
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Marvel',
    collection: 'Black Panther',
    rating: 4.9,
    isNew: true,
    discount: 0,
  },
  {
    id: 7,
    name: 'Multiverse Guardian',
    price: 28.99,
    image: 'https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Marvel',
    collection: 'Multiverse',
    rating: 4.5,
    isNew: false,
    discount: 5,
  },
  {
    id: 8,
    name: 'Krypton Legacy',
    price: 32.99,
    image: 'https://images.unsplash.com/photo-1542652735253-f228b6047af5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'DC Comics',
    collection: 'Superman',
    rating: 4.8,
    isNew: false,
    discount: 0,
  },
];

const categories = [
  'Marvel', 'DC Comics', 'Anime', 'Space', 'Video Games', 'Original'
];

const collections = [
  'Multiverse', 'Dark Heroes', 'Cosmic Heroes', 'Anime Heroes', 'Tech Heroes', 'Black Panther', 'Superman'
];

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const Products = () => {
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-comic text-white mb-2">All T-shirts</h1>
              <p className="text-foreground/70">Showing all {products.length} results</p>
            </div>
            
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center">
                <button 
                  className={`p-2 ${layout === 'grid' ? 'text-primary' : 'text-foreground/60 hover:text-primary'}`}
                  onClick={() => setLayout('grid')}
                >
                  <Grid2X2 className="h-5 w-5" />
                </button>
                <button 
                  className={`p-2 ${layout === 'list' ? 'text-primary' : 'text-foreground/60 hover:text-primary'}`}
                  onClick={() => setLayout('list')}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
              
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div>
              <div className="cosmic-card mb-4">
                <div 
                  className="flex justify-between items-center cursor-pointer p-2"
                  onClick={() => setFiltersOpen(!filtersOpen)}
                >
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="h-5 w-5" />
                    <h2 className="font-semibold">Filters</h2>
                  </div>
                  <ChevronDown className={`h-5 w-5 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
                </div>
                
                {filtersOpen && (
                  <div className="p-4 pt-0">
                    {/* Categories */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Categories</h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={`category-${category}`} />
                            <label 
                              htmlFor={`category-${category}`}
                              className="text-sm text-foreground/80 cursor-pointer"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    {/* Collections */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Collections</h3>
                      <div className="space-y-2">
                        {collections.map((collection) => (
                          <div key={collection} className="flex items-center space-x-2">
                            <Checkbox id={`collection-${collection}`} />
                            <label 
                              htmlFor={`collection-${collection}`}
                              className="text-sm text-foreground/80 cursor-pointer"
                            >
                              {collection}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    {/* Sizes */}
                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Size</h3>
                      <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                          <div 
                            key={size}
                            className="h-9 w-9 rounded-md border border-accent/20 flex items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-primary/10"
                          >
                            {size}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    {/* Price Range */}
                    <div>
                      <h3 className="font-medium mb-3">Price Range</h3>
                      <div className="flex items-center gap-4">
                        <div className="rounded-md border border-accent/20 p-2 w-full text-center">
                          $25
                        </div>
                        <span>-</span>
                        <div className="rounded-md border border-accent/20 p-2 w-full text-center">
                          $50
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-2">
                      <Button className="flex-1">Apply Filters</Button>
                      <Button variant="outline">Reset</Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className={layout === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
                : "space-y-6"
              }>
                {products.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`}>
                    {layout === 'grid' ? (
                      <Card className="cosmic-card group h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1">
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          
                          <div className="absolute top-2 left-2 flex flex-col gap-2">
                            {product.isNew && (
                              <Badge className="bg-cosmic-hero-blue text-white">New</Badge>
                            )}
                            {product.discount > 0 && (
                              <Badge className="bg-cosmic-hero-red text-white">-{product.discount}%</Badge>
                            )}
                          </div>
                          
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
                    ) : (
                      <Card className="cosmic-card group overflow-hidden transition-all duration-300 hover:shadow-accent/30">
                        <div className="flex flex-col sm:flex-row">
                          <div className="sm:w-1/3 relative">
                            <div className="aspect-square sm:h-full overflow-hidden">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            <div className="absolute top-2 left-2 flex flex-col gap-2">
                              {product.isNew && (
                                <Badge className="bg-cosmic-hero-blue text-white">New</Badge>
                              )}
                              {product.discount > 0 && (
                                <Badge className="bg-cosmic-hero-red text-white">-{product.discount}%</Badge>
                              )}
                            </div>
                          </div>
                          
                          <div className="sm:w-2/3 p-4 flex flex-col justify-between">
                            <div>
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                                    {product.name}
                                  </h3>
                                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                                    <span>{product.category}</span>
                                    <span>•</span>
                                    <span>{product.collection}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="h-4 w-4 fill-cosmic-hero-yellow text-cosmic-hero-yellow" />
                                  <span className="text-sm font-medium">{product.rating}</span>
                                </div>
                              </div>
                              
                              <p className="text-foreground/70 text-sm mb-4">
                                Premium quality t-shirt featuring exclusive {product.name} design. 
                                Made from 100% organic cotton for maximum comfort.
                              </p>
                            </div>
                            
                            <div className="flex justify-between items-center">
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
                              
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="rounded-full w-9 h-9 p-0">
                                  <Heart className="h-4 w-4" />
                                </Button>
                                <Button size="sm">
                                  <ShoppingCart className="h-4 w-4 mr-2" />
                                  Add to Cart
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    )}
                  </Link>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex space-x-1">
                  <Button variant="outline" size="icon" disabled>
                    <ChevronDown className="h-4 w-4 rotate-90" />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary/10 text-primary border-primary">1</Button>
                  <Button variant="outline" size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="icon">
                    <ChevronDown className="h-4 w-4 -rotate-90" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
