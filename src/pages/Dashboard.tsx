import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Coins, Clock, CheckCircle, Upload, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { DocCard } from "@/components/DocCard";
import { TokenCard } from "@/components/TokenCard";

const Dashboard = () => {
  // Mock data
  const stats = {
    totalDocuments: 12,
    verifiedDocuments: 8,
    pendingDocuments: 3,
    tokenBalance: 1250,
    nftCount: 5
  };

  const recentDocuments = [
    {
      id: "1",
      title: "Property Purchase Agreement",
      type: "Contract",
      status: "verified" as const,
      uploadDate: "2024-01-15",
      notaryName: "Sarah Johnson"
    },
    {
      id: "2", 
      title: "Last Will and Testament",
      type: "Will",
      status: "pending" as const,
      uploadDate: "2024-01-20"
    },
    {
      id: "3",
      title: "Power of Attorney",
      type: "Legal Document", 
      status: "tokenized" as const,
      uploadDate: "2024-01-10",
      notaryName: "Michael Chen"
    }
  ];

  const recentTokens = [
    {
      tokenId: "1001",
      documentTitle: "Property Purchase Agreement",
      tokenAmount: 1,
      blockchain: "Ethereum",
      contractAddress: "0x1234567890abcdef1234567890abcdef12345678",
      createdDate: "2024-01-16",
      ipfsHash: "QmX..."
    },
    {
      tokenId: "1002", 
      documentTitle: "Employment Contract",
      tokenAmount: 1,
      blockchain: "Polygon",
      contractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      createdDate: "2024-01-12",
      ipfsHash: "QmY..."
    }
  ];

  return (
    <MainLayout tokenBalance={stats.tokenBalance}>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your document overview.</p>
          </div>
          <Button asChild className="bg-gradient-to-r from-primary to-primary-glow">
            <Link to="/upload">
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Link>
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalDocuments}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.verifiedDocuments}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{stats.pendingDocuments}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
              <Coins className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.tokenBalance.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">CW20 Tokens</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NFTs Owned</CardTitle>
              <Coins className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.nftCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Documents */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Recent Documents</h2>
            <Button asChild variant="outline">
              <Link to="/documents">
                <Eye className="w-4 h-4 mr-2" />
                View All
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentDocuments.map((doc) => (
              <DocCard key={doc.id} {...doc} />
            ))}
          </div>
        </div>

        {/* Token Portfolio */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Token Portfolio</h2>
            <Badge className="bg-accent text-accent-foreground">
              {recentTokens.length} NFTs
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {recentTokens.map((token) => (
              <TokenCard key={token.tokenId} {...token} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;