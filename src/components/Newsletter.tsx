
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Zap } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cosmic-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cosmic-blue/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="container px-4 mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block comic-label animate-float mb-4">
            <Zap className="h-4 w-4 inline mr-1" />
            <span>Join Our Universe!</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-comic text-white mb-4">
            Subscribe for Cosmic Updates
          </h2>
          
          <p className="text-foreground/70 mb-8 mx-auto max-w-lg">
            Be the first to know about new releases, exclusive discounts, 
            and special events. Join our universe of comic fans!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-background border-accent/30 focus-visible:ring-primary"
            />
            <Button className="btn-hero whitespace-nowrap">Subscribe Now</Button>
          </div>
          
          <p className="text-xs text-foreground/50 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
