import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success';
  className?: string;
}

const badgeVariants = {
  default: 'bg-slate-700/50 text-slate-100 border border-slate-600/50',
  primary: 'bg-purple-900/30 text-purple-300 border border-purple-500/30',
  secondary: 'bg-cyan-900/30 text-cyan-300 border border-cyan-500/30',
  outline: 'border border-slate-500/50 text-slate-300',
  success: 'bg-emerald-900/30 text-emerald-300 border border-emerald-500/30',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-300',
        badgeVariants[variant],
        className
      )}
    >
      {children}
    </motion.span>
  );
};

interface BadgeGroupProps {
  items: string[];
  variant?: 'default' | 'primary' | 'secondary';
  className?: string;
}

export const BadgeGroup: React.FC<BadgeGroupProps> = ({
  items,
  variant = 'default',
  className,
}) => {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {items.map((item, index) => (
        <Badge key={item} variant={variant}>
          {item}
        </Badge>
      ))}
    </div>
  );
};
