
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, Heart, Package, RefreshCw, Star, Truck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <StarryBackground />
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container px-4 mx-auto">
          {/* Hero section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-comic text-white mb-6">About Cosmic Tees</h1>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              We're more than just a t-shirt shop. We're a community of passionate comic fans, 
              artists, and designers bringing amazing superhero artwork to life on premium quality apparel.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20 items-center">
            <div>
              <h2 className="text-3xl font-comic text-white mb-4">Our Story</h2>
              <p className="text-foreground/70 mb-4">
                Cosmic Tees was born from a simple idea: create t-shirts that truly capture the 
                magic and wonder of comic book universes. Founded in 2020 by a group of lifelong 
                comic fans, we set out to design apparel that we ourselves would be proud to wear.
              </p>
              <p className="text-foreground/70 mb-4">
                What started as a small passion project quickly grew into something much bigger. 
                Today, we work with talented artists from around the world to create exclusive 
                designs that celebrate heroes, villains, and everything in between.
              </p>
              <p className="text-foreground/70">
                Each Cosmic Tee is more than just a piece of clothing—it's a statement of fandom, 
                a conversation starter, and a way to carry a little bit of that comic book magic 
                with you wherever you go.
              </p>
            </div>
            <div className="comic-panel overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1613909671501-f9678fdf8efc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="The Cosmic Tees team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-comic text-white mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Heart className="h-8 w-8 text-cosmic-hero-red" />,
                  title: "Passion for Comics",
                  description: "We're genuine fans first. Every design is created with love and respect for the source material."
                },
                {
                  icon: <Star className="h-8 w-8 text-cosmic-hero-yellow" />,
                  title: "Quality Craftsmanship",
                  description: "We use premium materials to ensure comfort, durability, and vibrant prints that last."
                },
                {
                  icon: <Users className="h-8 w-8 text-cosmic-hero-blue" />,
                  title: "Community Connection",
                  description: "We foster a community of like-minded fans and celebrate the shared joy of comic culture."
                }
              ].map((value, index) => (
                <Card key={index} className="cosmic-card p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* The Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-comic text-white mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alex Parker",
                  role: "Founder & Creative Director",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  favorite: "Spider-Man"
                },
                {
                  name: "Sarah Chen",
                  role: "Lead Designer",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  favorite: "Wonder Woman"
                },
                {
                  name: "Miguel Rodriguez",
                  role: "Production Manager",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  favorite: "Black Panther"
                },
                {
                  name: "Zoe Williams",
                  role: "Community Manager",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  favorite: "Captain Marvel"
                }
              ].map((member, index) => (
                <Card key={index} className="cosmic-card overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-foreground/70 text-sm mb-2">{member.role}</p>
                    <p className="text-sm">Favorite hero: <span className="text-primary">{member.favorite}</span></p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-comic text-white mb-8 text-center">Why Choose Cosmic Tees</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Check className="h-5 w-5 text-cosmic-hero-green" />,
                  title: "Premium Quality",
                  description: "100% high-quality cotton for maximum comfort and durability."
                },
                {
                  icon: <RefreshCw className="h-5 w-5 text-cosmic-hero-blue" />,
                  title: "Easy Returns",
                  description: "30-day no-questions-asked return policy."
                },
                {
                  icon: <Truck className="h-5 w-5 text-cosmic-hero-yellow" />,
                  title: "Fast Shipping",
                  description: "Orders ship within 24-48 hours with tracking provided."
                },
                {
                  icon: <Package className="h-5 w-5 text-cosmic-hero-red" />,
                  title: "Special Packaging",
                  description: "Comic-inspired packaging that enhances the unboxing experience."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-foreground/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Sustainability */}
          <Card className="cosmic-card p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Sustainability" 
                  className="rounded-lg w-full"
                />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-comic text-white mb-4">Our Commitment to Sustainability</h2>
                <p className="text-foreground/70 mb-4">
                  We believe in creating products that not only look good but do good. That's why 
                  we're committed to sustainable and ethical practices throughout our supply chain.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-cosmic-hero-green mt-0.5" />
                    <span>Use of organic and recycled materials wherever possible</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-cosmic-hero-green mt-0.5" />
                    <span>Eco-friendly water-based inks for all our prints</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-cosmic-hero-green mt-0.5" />
                    <span>Plastic-free packaging made from recycled materials</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-cosmic-hero-green mt-0.5" />
                    <span>Carbon-offset shipping for all orders</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
