import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card hover-lift animate-fade-in">
      <div className="hover-zoom aspect-square bg-secondary">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{name}</h3>
        <p className="mb-4 text-2xl font-bold text-accent">{price}</p>
        <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
          Buy Now
        </Button>
      </div>
    </Card>
  );
};
