
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, X, ShoppingCart, ArrowRight, AlertCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

// Sample cart data
const initialCartItems = [
  {
    id: 1,
    name: 'Spider-Verse Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1583744946564-b52d01a7b321?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    size: 'M',
    color: 'Black',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Cosmic Galaxy',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    size: 'L',
    color: 'Navy Blue',
    quantity: 2,
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState('');

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    });
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim() === '') {
      toast({
        title: "Error",
        description: "Please enter a coupon code.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Coupon applied",
      description: "Your discount has been applied to the order.",
    });
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 4.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-comic text-white mb-6 flex items-center">
            <ShoppingBag className="mr-3 h-8 w-8" />
            Your Cart
          </h1>

          {cartItems.length === 0 ? (
            <Card className="cosmic-card p-8 text-center">
              <div className="flex flex-col items-center justify-center py-12">
                <ShoppingCart className="h-16 w-16 text-foreground/40 mb-4" />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-foreground/70 mb-6 max-w-md mx-auto">
                  Looks like you haven't added any items to your cart yet. 
                  Explore our collections to find the perfect superhero tee for you!
                </p>
                <Button asChild className="btn-hero">
                  <Link to="/collections">Explore Collections</Link>
                </Button>
              </div>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="cosmic-card p-4">
                    <div className="flex items-start gap-4">
                      <Link to={`/product/${item.id}`} className="shrink-0">
                        <div className="h-24 w-24 rounded-md overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </Link>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-semibold hover:text-primary">{item.name}</h3>
                          </Link>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-foreground/60 hover:text-primary/90"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </div>
                        <div className="text-sm text-foreground/70 mt-1">
                          <span>Size: {item.size}</span> • <span>Color: {item.color}</span>
                        </div>
                        <div className="flex justify-between items-center mt-3">
                          <div className="flex h-8 w-24">
                            <button 
                              className="w-8 flex items-center justify-center border border-r-0 border-accent/20 rounded-l-md"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <div className="flex-1 flex items-center justify-center border-y border-accent/20">
                              {item.quantity}
                            </div>
                            <button 
                              className="w-8 flex items-center justify-center border border-l-0 border-accent/20 rounded-r-md"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="cosmic-card p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Shipping</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex gap-2 mb-2">
                      <Input 
                        placeholder="Coupon code" 
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={handleApplyCoupon}>Apply</Button>
                    </div>
                  </div>
                  
                  <Button className="btn-hero w-full group">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <div className="mt-4 text-xs text-foreground/60 flex items-center justify-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    Secure checkout powered by Stripe
                  </div>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
