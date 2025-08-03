import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export const PageTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <div className={`animate-fade-in ${className}`}>
      {children}
    </div>
  );
};

export const SlideTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <div className={`animate-slide-in-right ${className}`}>
      {children}
    </div>
  );
};

export const ScaleTransition = ({ children, className = '' }: PageTransitionProps) => {
  return (
    <div className={`animate-scale-in ${className}`}>
      {children}
    </div>
  );
};