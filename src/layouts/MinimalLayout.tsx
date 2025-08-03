import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '@/utils/transitions';

interface MinimalLayoutProps {
  children: ReactNode;
  showHeader?: boolean;
}

export const MinimalLayout = ({ children, showHeader = true }: MinimalLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {showHeader && (
        <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">NR</span>
              </div>
              <span className="text-xl font-bold text-foreground">NotaryROAD</span>
            </Link>
            
            <nav className="flex items-center space-x-6">
              <Link 
                to="/login" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </header>
      )}
      
      <main className="flex-1">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  );
};