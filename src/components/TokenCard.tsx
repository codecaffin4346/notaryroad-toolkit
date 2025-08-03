import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, ExternalLink, Download } from "lucide-react";
import { Link } from "react-router-dom";

interface TokenCardProps {
  tokenId: string;
  documentTitle: string;
  tokenAmount: number;
  blockchain: string;
  contractAddress: string;
  createdDate: string;
  ipfsHash?: string;
  className?: string;
}

export const TokenCard = ({ 
  tokenId, 
  documentTitle, 
  tokenAmount, 
  blockchain, 
  contractAddress, 
  createdDate,
  ipfsHash,
  className 
}: TokenCardProps) => {
  const shortAddress = `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}`;
  
  return (
    <Card className={`bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 transition-all duration-200 hover:shadow-lg hover:scale-105 ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <Coins className="w-5 h-5 text-accent" />
            <h3 className="font-semibold text-card-foreground line-clamp-1">{documentTitle}</h3>
          </div>
          <Badge className="bg-accent text-accent-foreground">NFT</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-muted-foreground">Token ID:</span>
            <p className="text-card-foreground font-mono">#{tokenId}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Amount:</span>
            <p className="text-card-foreground">{tokenAmount.toLocaleString()}</p>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium text-muted-foreground">Blockchain:</span>
            <p className="text-card-foreground">{blockchain}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Contract:</span>
            <p className="text-card-foreground font-mono">{shortAddress}</p>
          </div>
          <div>
            <span className="font-medium text-muted-foreground">Created:</span>
            <p className="text-card-foreground">{createdDate}</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="space-x-2">
        <Button asChild variant="outline" size="sm" className="flex-1">
          <Link to={`/document/${tokenId}`}>
            <ExternalLink className="w-4 h-4 mr-2" />
            View
          </Link>
        </Button>
        
        {ipfsHash && (
          <Button variant="outline" size="sm" className="flex-1">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};