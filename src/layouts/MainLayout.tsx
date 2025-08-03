import { ReactNode } from 'react';
import { HeaderNav } from '@/components/HeaderNav';
import { Sidebar } from '@/components/Sidebar';
import { PageTransition } from '@/utils/transitions';

interface MainLayoutProps {
  children: ReactNode;
  userRole?: 'user' | 'notary' | 'admin';
  tokenBalance?: number;
}

export const MainLayout = ({ children, userRole = 'user', tokenBalance = 1250 }: MainLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNav userRole={userRole} tokenBalance={tokenBalance} />
      
      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar userRole={userRole} />
        
        <main className="flex-1 overflow-auto">
          <PageTransition className="p-6">
            {children}
          </PageTransition>
        </main>
      </div>
      
      <footer className="bg-card border-t border-border px-6 py-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>© 2024 NotaryROAD. All rights reserved.</span>
          <div className="flex space-x-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact</span>
          </div>
        </div>
      </footer>
    </div>
  );
};