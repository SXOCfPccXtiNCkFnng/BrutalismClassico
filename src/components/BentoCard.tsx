import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
  textColor?: string;
}

export function BentoCard({ 
  children, 
  className = "", 
  bgColor = "bg-white",
  textColor = "text-primary"
}: BentoCardProps) {
  return (
    <div className={`bento-card ${bgColor} ${textColor} ${className} flex flex-col justify-between overflow-hidden relative group`}>
      {children}
    </div>
  );
}
