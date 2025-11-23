import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { CategoryCard } from "@/components/CategoryCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Award, Truck, Shield, Heart } from "lucide-react";

import heroSneaker from "@/assets/hero-sneaker.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import categoryMen from "@/assets/category-men.jpg";
import categoryWomen from "@/assets/category-women.jpg";
import categoryNew from "@/assets/category-new.jpg";
import categoryBestsellers from "@/assets/category-bestsellers.jpg";

const Index = () => {
  const products = [
    { image: product1, name: "Urban Classic", price: "$89.99" },
    { image: product2, name: "Sport Orange", price: "$94.99" },
    { image: product3, name: "Pure White", price: "$79.99" },
    { image: product4, name: "Night Edition", price: "$99.99" },
  ];

  const categories = [
    { image: categoryMen, title: "Men's Sneakers" },
    { image: categoryWomen, title: "Women's Sneakers" },
    { image: categoryNew, title: "New Arrivals" },
    { image: categoryBestsellers, title: "Best Sellers" },
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      review: "Most comfortable shoes I've ever worn. Perfect for all-day wear!",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      review: "Great quality and amazing style. Worth every penny!",
      rating: 5,
    },
    {
      name: "Mike Davis",
      review: "Fast delivery and exactly as pictured. Highly recommend!",
      rating: 5,
    },
  ];

  const valuePoints = [
    {
      icon: Heart,
      title: "All-Day Comfort",
      description: "Comfortable for all-day wear",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Premium quality materials",
    },
    {
      icon: Shield,
      title: "Lightweight & Durable",
      description: "Built to last",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick shipping to your door",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary px-4">
        <div className="container mx-auto grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-7xl">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Step Into
              <span className="block text-accent">Style</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              Premium everyday sneakers designed for comfort.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 font-bold">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 font-bold border-2">
                Explore Collection
              </Button>
            </div>
          </div>
          <div className="animate-fade-in">
            <img
              src={heroSneaker}
              alt="Premium Sneaker"
              className="w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl animate-fade-in">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl animate-fade-in">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point, index) => (
              <div
                key={index}
                className="text-center p-6 animate-fade-in hover-lift rounded-lg bg-card"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <point.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{point.title}</h3>
                <p className="text-muted-foreground">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Showcase */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl animate-fade-in">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-4xl font-bold md:text-5xl animate-fade-in">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Offer Banner */}
      <section className="py-16 px-4 bg-accent text-accent-foreground">
        <div className="container mx-auto max-w-4xl text-center animate-fade-in">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Get 10% OFF on First Order
          </h2>
          <p className="text-xl font-bold mb-6">Use Code: URBAN10</p>
          <Button size="lg" variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6">
            Shop Now
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
