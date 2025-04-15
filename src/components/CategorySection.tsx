
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Sample categories
const categories = [
  {
    id: 'marvel',
    name: 'Marvel Universe',
    image: 'https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-red-500/80 to-red-800/80',
  },
  {
    id: 'dc',
    name: 'DC Comics',
    image: 'https://images.unsplash.com/photo-1598384435356-3e89d55ef1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500/80 to-blue-800/80',
  },
  {
    id: 'anime',
    name: 'Anime Heroes',
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-yellow-500/80 to-yellow-800/80',
  },
  {
    id: 'scifi',
    name: 'Sci-Fi & Fantasy',
    image: 'https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500/80 to-purple-800/80',
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 relative">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-comic text-white mb-8 text-center">Shop By Universe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-lg h-64 flex items-end transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t",
                  category.color
                )}></div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 w-full">
                <h3 className="font-comic text-xl text-white mb-1">{category.name}</h3>
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                  Explore Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
