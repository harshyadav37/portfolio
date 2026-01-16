import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = true,
  delay = 0,
  gradient = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8 } : {}}
      className={cn(
        'card-base group',
        gradient && 'bg-gradient-to-br from-white/10 to-white/5',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

interface GlassCardProps extends CardProps {
  icon?: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <Card {...props}>
      {icon && <div className="mb-4 text-2xl">{icon}</div>}
      {children}
    </Card>
  );
};
