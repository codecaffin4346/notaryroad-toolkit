import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, MapPin, Clock, Calendar } from "lucide-react";

interface NotaryCardProps {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  reviewCount: number;
  location: string;
  specialties: string[];
  price: number;
  availability: string;
  responseTime: string;
  className?: string;
  onBook?: () => void;
}

export const NotaryCard = ({ 
  id, 
  name, 
  avatar, 
  rating, 
  reviewCount, 
  location, 
  specialties, 
  price, 
  availability, 
  responseTime,
  className,
  onBook 
}: NotaryCardProps) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className={`transition-all duration-200 hover:shadow-lg hover:scale-105 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12">
            <AvatarImage src={avatar} />
            <AvatarFallback className="bg-primary text-primary-foreground">{initials}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-card-foreground line-clamp-1">{name}</h3>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                <span className="text-sm font-medium">{rating}</span>
                <span className="text-sm text-muted-foreground">({reviewCount})</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="text-lg font-bold text-primary">${price}</div>
            <div className="text-sm text-muted-foreground">per doc</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Responds in {responseTime}</span>
        </div>

        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{availability}</span>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-card-foreground">Specialties:</div>
          <div className="flex flex-wrap gap-1">
            {specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={onBook} className="w-full bg-gradient-to-r from-primary to-primary-glow">
          Book Notary Service
        </Button>
      </CardFooter>
    </Card>
  );
};