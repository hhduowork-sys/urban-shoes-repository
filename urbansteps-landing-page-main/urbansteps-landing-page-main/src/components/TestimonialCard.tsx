import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  review: string;
  rating: number;
}

export const TestimonialCard = ({ name, review, rating }: TestimonialCardProps) => {
  return (
    <Card className="p-6 bg-card border-border animate-fade-in">
      <div className="mb-4 flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
        ))}
      </div>
      <p className="mb-4 text-muted-foreground italic">"{review}"</p>
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg">
          {name.charAt(0)}
        </div>
        <p className="font-bold">{name}</p>
      </div>
    </Card>
  );
};
