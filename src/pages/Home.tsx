import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Shield, FileText, Coins, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { MinimalLayout } from "@/layouts/MinimalLayout";
import Aurora from "@/components/Aurora";

const Home = () => {
  return (
    <MinimalLayout>
      <div className="relative">
        <Aurora
          colorStops={["#214776", "#FF94B4", "#3A29FF"]}
          blend={0.3}
          amplitude={0.8}
          speed={0.6}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Secure Document Notarization
              <span className="block text-primary">on the Blockchain</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              NotaryROAD revolutionizes document verification with blockchain technology. 
              Upload, verify, and tokenize your legal documents with certified notaries.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow px-8">
                <Link to="/register">Start Notarizing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/marketplace">Find Notaries</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose NotaryROAD?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of document verification with our cutting-edge platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center glass-card aurora-enhanced hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Secure & Verified</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All documents are verified by certified notaries and secured on the blockchain
                </p>
              </CardContent>
            </Card>

            <Card className="text-center glass-card aurora-enhanced hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <Coins className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Tokenized Assets</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transform verified documents into tradeable NFTs with blockchain ownership
                </p>
              </CardContent>
            </Card>

            <Card className="text-center glass-card aurora-enhanced hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <FileText className="w-12 h-12 text-success mx-auto mb-4" />
                <h3 className="text-xl font-semibold">Easy Process</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Simple upload, professional review, and instant tokenization workflow
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Upload Document", desc: "Securely upload your legal documents" },
              { step: 2, title: "Notary Review", desc: "Certified notaries verify authenticity" },
              { step: 3, title: "Blockchain Record", desc: "Document recorded on immutable ledger" },
              { step: 4, title: "NFT Creation", desc: "Receive tokenized ownership certificate" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust NotaryROAD for secure document verification
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary-glow px-8">
            <Link to="/register">Create Your Account</Link>
          </Button>
        </section>
        </div>
      </div>
    </MinimalLayout>
  );
};

export default Home;