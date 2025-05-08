
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, description, className, children }) => {
  return (
    <section id={id} className={cn("py-12 md:py-16", className)}>
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tight mb-3">{title}</h2>
        {description && (
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
