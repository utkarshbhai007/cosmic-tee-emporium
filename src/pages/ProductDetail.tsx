
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Heart, ArrowLeft, Star, Share2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/use-toast';

// Sample product data
const product = {
  id: 1,
  name: 'Spider-Verse Tee',
  price: 29.99,
  description: 'Step into the Spider-Verse with this premium graphic tee featuring a stunning multi-dimensional design inspired by the award-winning film. Made from 100% organic cotton for maximum comfort and durability.',
  images: [
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1618354691229-88d47f285158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
  ],
  category: 'Marvel',
  collection: 'Spider-Verse',
  rating: 4.8,
  reviewCount: 124,
  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  colors: ['Black', 'Navy Blue', 'Dark Red'],
  features: [
    '100% organic cotton',
    'Premium graphic print',
    'Pre-shrunk fabric',
    'Tear-away label',
    'Ethically sourced materials',
  ],
  inStock: true,
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        title: "Please select options",
        description: "You need to select both size and color before adding to cart.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Added to cart!",
      description: `${product.name} (${selectedColor}, ${selectedSize}) x ${quantity} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container px-4 mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-foreground/60 mb-6">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span>/</span>
            <a href="/products" className="hover:text-primary transition-colors">Products</a>
            <span>/</span>
            <a href={`/category/${product.category.toLowerCase()}`} className="hover:text-primary transition-colors">{product.category}</a>
            <span>/</span>
            <span className="text-foreground/90">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="cosmic-card overflow-hidden aspect-square">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover object-center" 
                />
              </div>
              
              <div className="flex gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`cosmic-card p-0 h-20 w-20 overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover" 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <div className="inline-block bg-cosmic-hero-yellow px-2 py-0.5 text-xs font-medium text-black rounded mb-2">
                    {product.collection}
                  </div>
                  <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                
                <h1 className="text-3xl font-bold text-foreground mb-1">{product.name}</h1>
                
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-cosmic-hero-yellow text-cosmic-hero-yellow" : "text-muted"}`} 
                      />
                    ))}
                    <span className="ml-2 text-sm text-foreground/70">{product.rating} ({product.reviewCount} reviews)</span>
                  </div>
                  
                  <span className="text-sm text-foreground/70">Category: {product.category}</span>
                </div>
                
                <div className="text-2xl font-bold text-foreground mb-4">${product.price.toFixed(2)}</div>
                
                <p className="text-foreground/70">{product.description}</p>
              </div>
              
              <Separator />
              
              {/* Product Options */}
              <div className="space-y-4">
                {/* Size Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`h-10 px-4 rounded-md border ${
                          selectedSize === size 
                            ? 'bg-primary/20 border-primary text-primary' 
                            : 'border-accent/20 text-foreground/70 hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Color Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`px-4 py-2 rounded-md border ${
                          selectedColor === color 
                            ? 'bg-primary/20 border-primary text-primary' 
                            : 'border-accent/20 text-foreground/70 hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium mb-2">Quantity</label>
                  <div className="flex h-10 w-32">
                    <button 
                      className="w-10 flex items-center justify-center border border-r-0 border-accent/20 rounded-l-md"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <div className="flex-1 flex items-center justify-center border-y border-accent/20">
                      {quantity}
                    </div>
                    <button 
                      className="w-10 flex items-center justify-center border border-l-0 border-accent/20 rounded-r-md"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Button className="btn-hero flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Product Status */}
              <div className="text-sm">
                {product.inStock ? (
                  <span className="text-green-500">✓ In stock and ready to ship</span>
                ) : (
                  <span className="text-red-500">✗ Out of stock</span>
                )}
              </div>
              
              {/* Tabs for additional info */}
              <Tabs defaultValue="details" className="mt-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="cosmic-card mt-4">
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Product Description</h3>
                    <p className="text-foreground/70">
                      Step into the Spider-Verse with this premium graphic tee featuring a stunning multi-dimensional design inspired by the award-winning film. Each shirt is expertly printed with vibrant, long-lasting inks that won't crack or fade with washing.
                    </p>
                    <p className="text-foreground/70">
                      Made from 100% organic cotton for comfort and sustainability, this collector's item is a must-have for any true Spider-Man fan. The pre-shrunk fabric ensures a perfect fit wash after wash.
                    </p>
                    
                    <h4 className="font-medium">Care Instructions</h4>
                    <ul className="list-disc list-inside text-foreground/70 space-y-1">
                      <li>Machine wash cold with similar colors</li>
                      <li>Do not bleach</li>
                      <li>Tumble dry low</li>
                      <li>Cool iron if needed</li>
                      <li>Do not dry clean</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="cosmic-card mt-4">
                  <div className="space-y-4">
                    <h3 className="font-medium text-lg">Product Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-5 w-5 rounded-full bg-cosmic-purple/20 flex items-center justify-center mr-3 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-cosmic-purple"></div>
                          </div>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="cosmic-card mt-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium text-lg">Customer Reviews</h3>
                      <Button variant="outline" size="sm">Write a Review</Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold">{product.rating}</div>
                      <div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-cosmic-hero-yellow text-cosmic-hero-yellow" : "text-muted"}`} 
                            />
                          ))}
                        </div>
                        <p className="text-sm text-foreground/70">Based on {product.reviewCount} reviews</p>
                      </div>
                    </div>
                    <Separator />
                    <p className="text-center text-foreground/70 py-8">
                      Sign in to view and write reviews
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
