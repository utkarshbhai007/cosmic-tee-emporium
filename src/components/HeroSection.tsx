
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden py-12 md:py-20">
      {/* Hero Content */}
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="comic-label inline-flex items-center gap-1">
              <Zap className="h-4 w-4" />
              <span>New Releases!</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-comic text-white leading-tight">
              <span className="text-cosmic-hero-blue">Cosmic</span>{" "}
              <span className="text-cosmic-hero-red">Super</span>{" "}
              <span className="text-cosmic-hero-yellow">Tees</span>
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-md">
              Unleash your inner hero with our limited-edition comic-inspired t-shirts.
              From Marvel to DC and beyond, wear your fandom with pride!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="btn-hero group">
                Shop Now 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="bg-background/50 hover:bg-background/70">
                View Collections
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="comic-panel aspect-[4/5] p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-hero-blue/20 via-cosmic-hero-red/20 to-cosmic-hero-yellow/20"></div>
              
              {/* Comic book style t-shirt display */}
              <div className="relative h-full w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
                  alt="Superhero T-shirt showcase" 
                  className="h-full w-full object-cover"
                />
                
                {/* Comic style caption bubbles */}
                <div className="absolute top-4 right-4 -rotate-12 bg-cosmic-hero-yellow p-2 font-comic text-black shadow-md">
                  <span className="text-xl">POW!</span>
                </div>
                
                <div className="absolute bottom-6 left-6 bg-white p-3 font-comic text-black shadow-md">
                  <span className="text-xl">Limited Edition!</span>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-cosmic-hero-blue/20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-cosmic-hero-red/20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
