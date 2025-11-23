import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  image: string;
  title: string;
}

export const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg animate-fade-in hover-lift">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>
        <Button 
          variant="secondary" 
          className="bg-white text-primary hover:bg-white/90 font-bold group"
        >
          Explore Now
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};
