import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Calendar, Shield, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface DocCardProps {
  id: string;
  title: string;
  type: string;
  status: 'pending' | 'verified' | 'tokenized' | 'rejected';
  uploadDate: string;
  notaryName?: string;
  className?: string;
}

export const DocCard = ({ 
  id, 
  title, 
  type, 
  status, 
  uploadDate, 
  notaryName,
  className 
}: DocCardProps) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'pending':
        return <Badge variant="secondary">Pending Review</Badge>;
      case 'verified':
        return <Badge className="bg-success text-success-foreground">Verified</Badge>;
      case 'tokenized':
        return <Badge className="bg-accent text-accent-foreground">Tokenized</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg hover:scale-105 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-card-foreground line-clamp-1">{title}</h3>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Type:</span> {type}
        </div>
        
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>Uploaded {uploadDate}</span>
        </div>

        {notaryName && (
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            <span>Notary: {notaryName}</span>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link to={`/document/${id}`}>
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};