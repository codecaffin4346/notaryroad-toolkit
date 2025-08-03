import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, MapPin } from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { NotaryCard } from "@/components/NotaryCard";
import Aurora from "@/components/Aurora";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");

  // Mock notary data
  const notaries = [
    {
      id: "1",
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
      rating: 4.9,
      reviewCount: 127,
      location: "New York, NY",
      specialties: ["Real Estate", "Contracts", "Wills"],
      price: 75,
      availability: "Available today",
      responseTime: "2 hours"
    },
    {
      id: "2",
      name: "Michael Chen",
      avatar: "/avatars/michael.jpg", 
      rating: 4.8,
      reviewCount: 89,
      location: "Los Angeles, CA",
      specialties: ["Corporate", "International", "Immigration"],
      price: 90,
      availability: "Available tomorrow",
      responseTime: "1 hour"
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      avatar: "/avatars/emily.jpg",
      rating: 4.7,
      reviewCount: 156,
      location: "Chicago, IL", 
      specialties: ["Family Law", "Affidavits", "Powers of Attorney"],
      price: 65,
      availability: "Available this week",
      responseTime: "4 hours"
    },
    {
      id: "4",
      name: "David Williams",
      avatar: "/avatars/david.jpg",
      rating: 4.9,
      reviewCount: 203,
      location: "Miami, FL",
      specialties: ["Real Estate", "Business", "Estate Planning"],
      price: 80,
      availability: "Available today",
      responseTime: "30 minutes"
    },
    {
      id: "5",
      name: "Lisa Thompson",
      avatar: "/avatars/lisa.jpg",
      rating: 4.6,
      reviewCount: 74,
      location: "Austin, TX",
      specialties: ["Technology", "Startups", "Intellectual Property"],
      price: 95,
      availability: "Available next week",
      responseTime: "3 hours"
    },
    {
      id: "6",
      name: "Robert Kim",
      avatar: "/avatars/robert.jpg",
      rating: 4.8,
      reviewCount: 142,
      location: "Seattle, WA",
      specialties: ["Healthcare", "HIPAA", "Medical Documents"],
      price: 85,
      availability: "Available tomorrow",
      responseTime: "1.5 hours"
    }
  ];

  const filteredNotaries = notaries.filter(notary => {
    const matchesSearch = notary.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notary.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = !selectedLocation || selectedLocation === "all" || notary.location.includes(selectedLocation);
    const matchesSpecialty = !selectedSpecialty || selectedSpecialty === "all" || notary.specialties.includes(selectedSpecialty);
    
    return matchesSearch && matchesLocation && matchesSpecialty;
  });

  const handleBookNotary = (notaryId: string) => {
    console.log(`Booking notary ${notaryId}`);
    // Implement booking logic
  };

  return (
    <MainLayout>
      <div className="relative">
        <Aurora
          colorStops={["#214776", "#3A29FF", "#FF94B4"]}
          blend={0.15}
          amplitude={0.4}
          speed={0.2}
        />
        <div className="relative z-10 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Notary Marketplace</h1>
          <p className="text-muted-foreground">
            Find certified notaries for your document verification needs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 p-6 bg-card rounded-lg border">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="New York">New York</SelectItem>
              <SelectItem value="Los Angeles">Los Angeles</SelectItem>
              <SelectItem value="Chicago">Chicago</SelectItem>
              <SelectItem value="Miami">Miami</SelectItem>
              <SelectItem value="Austin">Austin</SelectItem>
              <SelectItem value="Seattle">Seattle</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="Real Estate">Real Estate</SelectItem>
              <SelectItem value="Contracts">Contracts</SelectItem>
              <SelectItem value="Wills">Wills</SelectItem>
              <SelectItem value="Corporate">Corporate</SelectItem>
              <SelectItem value="Family Law">Family Law</SelectItem>
              <SelectItem value="Business">Business</SelectItem>
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
              {filteredNotaries.length} Notaries Available
            </h2>
            <p className="text-muted-foreground">
              Sorted by availability and rating
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="text-success">
              {filteredNotaries.filter(n => n.availability.includes('today')).length} Available Today
            </Badge>
          </div>
        </div>

        {/* Notary Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotaries.map((notary) => (
            <NotaryCard
              key={notary.id}
              {...notary}
              onBook={() => handleBookNotary(notary.id)}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredNotaries.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No notaries found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search criteria or browse all available notaries
            </p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedLocation("all");
                setSelectedSpecialty("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Marketplace;