import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Wallet, Mail, Lock, User, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { MinimalLayout } from "@/layouts/MinimalLayout";
import Aurora from "@/components/Aurora";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement email login logic
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleWalletConnect = async () => {
    setIsLoading(true);
    // Implement wallet connection logic
    setTimeout(() => setIsLoading(false), 2000);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Implement registration logic
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <MinimalLayout>
      <div className="relative min-h-[calc(100vh-80px)]">
        <Aurora
          colorStops={["#3A29FF", "#214776", "#FF94B4"]}
          blend={0.25}
          amplitude={0.7}
          speed={0.3}
        />
        <div className="relative z-10 flex items-center justify-center p-6">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome to NotaryROAD</h1>
            <p className="text-muted-foreground">
              Sign in to access secure document notarization
            </p>
          </div>

          <Card className="glass-card aurora-enhanced">
            <CardHeader>
              <CardTitle className="text-center">Access Your Account</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login" className="space-y-4">
                  <form onSubmit={handleEmailLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow"
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>

                  <div className="text-center">
                    <Link 
                      to="/forgot-password" 
                      className="text-sm text-primary hover:text-primary/80"
                    >
                      Forgot your password?
                    </Link>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <Separator />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>

                  <Button 
                    onClick={handleWalletConnect}
                    variant="outline" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    <Wallet className="w-4 h-4 mr-2" />
                    {isLoading ? "Connecting..." : "Connect Wallet"}
                  </Button>
                </TabsContent>

                {/* Register Tab */}
                <TabsContent value="register" className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="registerEmail">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="registerEmail"
                          type="email"
                          placeholder="Enter your email"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="registerPassword">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="registerPassword"
                          type="password"
                          placeholder="Create a strong password"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm your password"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-primary-glow"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>

                  <div className="text-center text-sm text-muted-foreground">
                    By creating an account, you agree to our{" "}
                    <Link to="/terms" className="text-primary hover:text-primary/80">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              Need help?{" "}
              <Link to="/support" className="text-primary hover:text-primary/80">
                Contact Support
              </Link>
            </p>
          </div>
        </div>
        </div>
      </div>
    </MinimalLayout>
  );
};

export default Login;