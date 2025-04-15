
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const FeaturedCollection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="comic-panel aspect-[4/5] p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-hero-blue/20 via-cosmic-hero-red/20 to-cosmic-purple/20"></div>
              
              <div className="relative h-full w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1612356689457-806f07e4ca8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Limited edition superhero collection" 
                  className="h-full w-full object-cover"
                />
                
                {/* Comic style elements */}
                <div className="absolute top-4 left-4 -rotate-6 bg-cosmic-hero-red p-2 font-comic text-white shadow-md">
                  <span className="text-xl">LIMITED!</span>
                </div>
                
                <div className="absolute bottom-4 right-4 rotate-3 bg-white p-3 font-comic text-black shadow-md">
                  <span className="text-xl">Collectors Edition</span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-cosmic-purple/20 blur-2xl"></div>
            <div className="absolute -top-8 -left-8 h-28 w-28 rounded-full bg-cosmic-blue/20 blur-2xl"></div>
          </div>
          
          {/* Right Side - Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-comic text-white">
              Limited Edition <br />
              <span className="text-cosmic-hero-red">Multiverse</span> Collection
            </h2>
            
            <p className="text-foreground/80">
              Our exclusive Multiverse Collection brings together the most iconic superhero designs
              from across parallel universes. Each t-shirt is crafted with premium materials and
              features vibrant, detailed artwork that brings your favorite characters to life.
            </p>
            
            <ul className="space-y-3">
              {[
                "Premium 100% cotton fabric",
                "Collector's edition packaging",
                "Numbered limited series",
                "Certificate of authenticity",
                "Exclusive art prints included"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-cosmic-purple/20 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-cosmic-purple"></div>
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <Link to="/collections/multiverse">
                <Button className="btn-hero group">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
