import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Users, 
  FileText, 
  Shield, 
  TrendingUp, 
  Eye, 
  CheckCircle, 
  XCircle,
  Clock,
  AlertTriangle
} from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";

const Admin = () => {
  // Mock admin data
  const stats = {
    totalUsers: 1247,
    activeNotaries: 89,
    pendingDocuments: 23,
    monthlyRevenue: 45678
  };

  const pendingApprovals = [
    {
      id: "1",
      documentTitle: "Corporate Merger Agreement",
      userEmail: "john.doe@example.com",
      notaryName: "Sarah Johnson",
      submissionDate: "2024-01-20",
      urgency: "high",
      type: "Contract"
    },
    {
      id: "2", 
      documentTitle: "Property Deed Transfer",
      userEmail: "jane.smith@example.com",
      notaryName: "Michael Chen",
      submissionDate: "2024-01-19",
      urgency: "medium",
      type: "Real Estate"
    },
    {
      id: "3",
      documentTitle: "Last Will and Testament",
      userEmail: "bob.wilson@example.com",
      notaryName: "Emily Rodriguez",
      submissionDate: "2024-01-18",
      urgency: "low",
      type: "Estate"
    }
  ];

  const recentUsers = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      joinDate: "2024-01-20",
      status: "active",
      documentCount: 3
    },
    {
      id: "2",
      name: "Jane Smith", 
      email: "jane.smith@example.com",
      joinDate: "2024-01-19",
      status: "pending",
      documentCount: 1
    },
    {
      id: "3",
      name: "Bob Wilson",
      email: "bob.wilson@example.com", 
      joinDate: "2024-01-18",
      status: "active",
      documentCount: 5
    }
  ];

  const handleApprove = (documentId: string) => {
    console.log(`Approving document ${documentId}`);
    // Implement approval logic
  };

  const handleReject = (documentId: string) => {
    console.log(`Rejecting document ${documentId}`);
    // Implement rejection logic
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'high':
        return <Badge variant="destructive">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-warning text-warning-foreground">Medium</Badge>;
      case 'low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">Normal</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pending</Badge>;
      case 'suspended':
        return <Badge variant="destructive">Suspended</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <MainLayout userRole="admin">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">
            Manage users, monitor documents, and oversee platform operations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Notaries</CardTitle>
              <Shield className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.activeNotaries}</div>
              <p className="text-xs text-muted-foreground">+3 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Clock className="h-4 w-4 text-warning" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">{stats.pendingDocuments}</div>
              <p className="text-xs text-muted-foreground">Requires attention</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">${stats.monthlyRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="approvals" className="space-y-6">
          <TabsList>
            <TabsTrigger value="approvals">Pending Approvals</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Pending Approvals Tab */}
          <TabsContent value="approvals">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  <span>Documents Pending RWA Approval</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((document) => (
                    <div key={document.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <h3 className="font-semibold">{document.documentTitle}</h3>
                          {getUrgencyBadge(document.urgency)}
                        </div>
                        
                        <div className="text-sm text-muted-foreground space-y-1">
                          <p>User: {document.userEmail}</p>
                          <p>Notary: {document.notaryName}</p>
                          <p>Submitted: {document.submissionDate}</p>
                          <p>Type: {document.type}</p>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          Review
                        </Button>
                        <Button 
                          onClick={() => handleApprove(document.id)}
                          size="sm"
                          className="bg-success text-success-foreground hover:bg-success/90"
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button 
                          onClick={() => handleReject(document.id)}
                          variant="destructive" 
                          size="sm"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* User Management Tab */}
          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Recent User Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarImage src={`/avatars/${user.name.toLowerCase().replace(' ', '-')}.jpg`} />
                          <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <h3 className="font-semibold">{user.name}</h3>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          <p className="text-sm text-muted-foreground">
                            Joined: {user.joinDate} • {user.documentCount} documents
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        {getStatusBadge(user.status)}
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Profile
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platform Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Documents Uploaded</span>
                      <span className="font-bold">156 this week</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Verifications Completed</span>
                      <span className="font-bold">142 this week</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NFTs Minted</span>
                      <span className="font-bold">89 this week</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Revenue Generated</span>
                      <span className="font-bold text-success">$12,340 this week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>API Response Time</span>
                      <Badge className="bg-success text-success-foreground">95ms avg</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Uptime</span>
                      <Badge className="bg-success text-success-foreground">99.9%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Error Rate</span>
                      <Badge className="bg-success text-success-foreground">0.1%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Active Sessions</span>
                      <Badge variant="secondary">1,234</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default Admin;