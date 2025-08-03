import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Wallet, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

interface HeaderNavProps {
  userRole?: 'user' | 'notary' | 'admin';
  tokenBalance?: number;
}

export const HeaderNav = ({ userRole = 'user', tokenBalance = 0 }: HeaderNavProps) => {
  return (
    <header className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">NR</span>
            </div>
            <span className="text-xl font-bold text-foreground">NotaryROAD</span>
          </Link>
          
          <Badge variant="secondary" className="capitalize">
            {userRole}
          </Badge>
        </div>

        <div className="flex items-center space-x-4">
          {tokenBalance > 0 && (
            <div className="flex items-center space-x-2 bg-accent/10 px-3 py-1 rounded-full">
              <Wallet className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">{tokenBalance.toLocaleString()} CW20</span>
            </div>
          )}
          
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4" />
          </Button>
          
          <Button variant="ghost" size="sm">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};