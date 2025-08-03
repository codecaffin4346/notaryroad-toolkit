import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Upload, SortAsc } from "lucide-react";
import { Link } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { DocCard } from "@/components/DocCard";

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [sortBy, setSortBy] = useState("date");

  // Mock documents data
  const documents = [
    {
      id: "1",
      title: "Property Purchase Agreement",
      type: "Real Estate Contract",
      status: "verified" as const,
      uploadDate: "2024-01-15",
      notaryName: "Sarah Johnson"
    },
    {
      id: "2",
      title: "Last Will and Testament",
      type: "Estate Document",
      status: "pending" as const,
      uploadDate: "2024-01-20"
    },
    {
      id: "3",
      title: "Power of Attorney",
      type: "Legal Authorization",
      status: "tokenized" as const,
      uploadDate: "2024-01-10",
      notaryName: "Michael Chen"
    },
    {
      id: "4",
      title: "Business Partnership Agreement",
      type: "Corporate Contract",
      status: "verified" as const,
      uploadDate: "2024-01-18",
      notaryName: "Emily Rodriguez"
    },
    {
      id: "5",
      title: "Non-Disclosure Agreement",
      type: "Business Contract",
      status: "rejected" as const,
      uploadDate: "2024-01-22",
      notaryName: "David Williams"
    },
    {
      id: "6",
      title: "Employment Contract",
      type: "HR Document",
      status: "tokenized" as const,
      uploadDate: "2024-01-12",
      notaryName: "Lisa Thompson"
    },
    {
      id: "7",
      title: "Medical Power of Attorney",
      type: "Healthcare Document",
      status: "pending" as const,
      uploadDate: "2024-01-25"
    },
    {
      id: "8",
      title: "Lease Agreement", 
      type: "Real Estate Contract",
      status: "verified" as const,
      uploadDate: "2024-01-14",
      notaryName: "Robert Kim"
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || doc.status === statusFilter;
    const matchesType = !typeFilter || doc.type.includes(typeFilter);
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const sortedDocuments = [...filteredDocuments].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
      case 'title':
        return a.title.localeCompare(b.title);
      case 'status':
        return a.status.localeCompare(b.status);
      default:
        return 0;
    }
  });

  const getStatusCount = (status: string) => {
    return documents.filter(doc => doc.status === status).length;
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">My Documents</h1>
            <p className="text-muted-foreground">
              Manage and track all your uploaded documents
            </p>
          </div>
          <Button asChild className="bg-gradient-to-r from-primary to-primary-glow">
            <Link to="/upload">
              <Upload className="w-4 h-4 mr-2" />
              Upload New Document
            </Link>
          </Button>
        </div>

        {/* Status Overview */}
        <div className="grid md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-foreground">{documents.length}</div>
            <div className="text-sm text-muted-foreground">Total Documents</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-success">{getStatusCount('verified')}</div>
            <div className="text-sm text-muted-foreground">Verified</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-warning">{getStatusCount('pending')}</div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </div>
          <div className="text-center p-4 bg-card rounded-lg border">
            <div className="text-2xl font-bold text-accent">{getStatusCount('tokenized')}</div>
            <div className="text-sm text-muted-foreground">Tokenized</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 p-6 bg-card rounded-lg border">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="verified">Verified</SelectItem>
              <SelectItem value="tokenized">Tokenized</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="All Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Types</SelectItem>
              <SelectItem value="Contract">Contracts</SelectItem>
              <SelectItem value="Real Estate">Real Estate</SelectItem>
              <SelectItem value="Estate">Estate Planning</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
              <SelectItem value="Healthcare">Healthcare</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Upload Date</SelectItem>
              <SelectItem value="title">Title</SelectItem>
              <SelectItem value="status">Status</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {sortedDocuments.length} Documents Found
            </h2>
            <p className="text-muted-foreground">
              Sorted by {sortBy.replace('_', ' ')}
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <SortAsc className="w-4 h-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedDocuments.map((document) => (
            <DocCard key={document.id} {...document} />
          ))}
        </div>

        {/* Empty State */}
        {sortedDocuments.length === 0 && (
          <div className="text-center py-12">
            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No documents found</h3>
            <p className="text-muted-foreground mb-4">
              {searchTerm || statusFilter || typeFilter 
                ? "Try adjusting your search criteria or clear the filters"
                : "Upload your first document to get started with notarization"
              }
            </p>
            {(searchTerm || statusFilter || typeFilter) ? (
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setStatusFilter("");
                  setTypeFilter("");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            ) : (
              <Button asChild className="bg-gradient-to-r from-primary to-primary-glow">
                <Link to="/upload">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Your First Document
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Documents;