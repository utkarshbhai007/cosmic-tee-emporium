
import React from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

// Sample testimonials
const testimonials = [
  {
    id: 1,
    name: 'Peter Parker',
    avatar: 'https://i.pravatar.cc/150?img=32',
    role: 'Comic Enthusiast',
    content: 'The quality of these t-shirts is amazing! The Spider-Verse design I got has such vibrant colors that haven\'t faded even after multiple washes. Definitely my new favorite shirt!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Diana Prince',
    avatar: 'https://i.pravatar.cc/150?img=5',
    role: 'Collector',
    content: 'I\'ve been collecting superhero merchandise for years, and Cosmic Tees offers some of the most unique designs I\'ve seen. Great attention to detail and fast shipping.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Bruce Wayne',
    avatar: 'https://i.pravatar.cc/150?img=11',
    role: 'Fashion Enthusiast',
    content: 'The Gotham Knight t-shirt exceeded my expectations. Premium fabric that feels great and fits perfectly. Already ordered three more from different collections.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 relative">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-comic text-white mb-4">
            Heroes Love Our Tees
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their Cosmic Tees experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="cosmic-card overflow-visible h-full">
              {/* Rating */}
              <div className="flex text-cosmic-hero-yellow mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? "fill-cosmic-hero-yellow" : "text-muted"}`} 
                  />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="mb-6 text-foreground/80 italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center space-x-4 mt-auto">
                <div className="relative">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-primary" 
                  />
                  <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-cosmic-hero-yellow border-2 border-background"></div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
