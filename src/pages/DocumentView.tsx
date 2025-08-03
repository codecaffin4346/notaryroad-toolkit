import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Download, 
  Share, 
  ExternalLink, 
  Shield, 
  Calendar,
  User,
  Hash,
  Globe
} from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";

const DocumentView = () => {
  const { id } = useParams();

  // Mock document data
  const document = {
    id: id || "1",
    title: "Property Purchase Agreement",
    type: "Real Estate Contract",
    status: "tokenized" as 'pending' | 'verified' | 'tokenized' | 'rejected',
    uploadDate: "2024-01-15",
    verificationDate: "2024-01-16",
    tokenizationDate: "2024-01-16",
    ownerAddress: "0x1234567890abcdef1234567890abcdef12345678",
    notary: {
      name: "Sarah Johnson",
      license: "NY-12345",
      signature: "Digital signature verified"
    },
    blockchain: {
      network: "Ethereum",
      contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      tokenId: "1001",
      txHash: "0x987654321098765432109876543210987654321098765432109876543210abcd"
    },
    ipfs: {
      hash: "QmX7Kv9z2F5H8mC6nR4qS1uE3tY7wP9aB5dG8jL6kM2nO",
      gateway: "https://ipfs.io/ipfs/"
    },
    metadata: {
      fileSize: "2.4 MB",
      fileType: "PDF",
      pages: 12,
      lastModified: "2024-01-15T10:30:00Z"
    }
  };

  const getStatusBadge = () => {
    switch (document.status) {
      case 'pending':
        return <Badge variant="secondary">Pending Review</Badge>;
      case 'verified':
        return <Badge className="bg-success text-success-foreground">Verified</Badge>;
      case 'tokenized':
        return <Badge className="bg-accent text-accent-foreground">Tokenized NFT</Badge>;
      case 'rejected':
        return <Badge variant="destructive">Rejected</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">{document.title}</h1>
              {getStatusBadge()}
            </div>
            <p className="text-muted-foreground">Document ID: {document.id}</p>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline">
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button>
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Document Preview */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Document Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground mb-4">
                    PDF Preview ({document.metadata.pages} pages, {document.metadata.fileSize})
                  </p>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Full Document
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Document Details */}
          <div className="space-y-6">
            {/* Basic Info */}
            <Card>
              <CardHeader>
                <CardTitle>Document Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Type</label>
                  <p className="text-foreground">{document.type}</p>
                </div>
                
                <Separator />
                
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Upload Date</label>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{document.uploadDate}</span>
                  </div>
                </div>

                {document.verificationDate && (
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Verified Date</label>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-success" />
                      <span>{document.verificationDate}</span>
                    </div>
                  </div>
                )}

                {document.tokenizationDate && (
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Tokenized Date</label>
                    <div className="flex items-center space-x-2">
                      <Hash className="w-4 h-4 text-accent" />
                      <span>{document.tokenizationDate}</span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notary Information */}
            <Card>
              <CardHeader>
                <CardTitle>Notary Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Notary Public</label>
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{document.notary.name}</span>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">License</label>
                  <p className="text-foreground font-mono">{document.notary.license}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Digital Signature</label>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-success" />
                    <span className="text-success">{document.notary.signature}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blockchain Info */}
            {document.status === 'tokenized' && (
              <Card>
                <CardHeader>
                  <CardTitle>Blockchain Record</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Network</label>
                    <div className="flex items-center space-x-2">
                      <Globe className="w-4 h-4" />
                      <span>{document.blockchain.network}</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Token ID</label>
                    <p className="text-foreground font-mono">#{document.blockchain.tokenId}</p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Contract</label>
                    <p className="text-foreground font-mono text-xs break-all">
                      {document.blockchain.contractAddress}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Transaction</label>
                    <p className="text-foreground font-mono text-xs break-all">
                      {document.blockchain.txHash}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">IPFS Hash</label>
                    <p className="text-foreground font-mono text-xs break-all">
                      {document.ipfs.hash}
                    </p>
                  </div>

                  <Button variant="outline" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Explorer
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Owner Info */}
            {document.ownerAddress && (
              <Card>
                <CardHeader>
                  <CardTitle>Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Owner Address</label>
                    <p className="text-foreground font-mono text-xs break-all">
                      {document.ownerAddress}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DocumentView;