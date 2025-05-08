
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = React.useState('overview');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="h-6 w-6 rounded-sm bg-terraform text-white flex items-center justify-center font-bold text-sm">T</span>
            <span className="h-6 w-6 rounded-sm bg-ansible text-white flex items-center justify-center font-bold text-sm">A</span>
          </div>
          <h1 className="text-lg font-semibold">IaC Explorer</h1>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {['overview', 'terraform', 'ansible', 'workflow', 'examples'].map((section) => (
            <Button
              key={section}
              variant="ghost"
              className={cn(
                "text-sm",
                activeSection === section && "bg-accent"
              )}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <Button variant="outline" size="sm">Menu</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
