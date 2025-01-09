import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className = '' }: BadgeProps) {
  return (
    <span className={`px-3 py-1 text-sm font-medium rounded-full ${className}`}>
      {children}
    </span>
  );
} 