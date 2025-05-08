
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, ServerIcon, CodeIcon, CloudIcon } from 'lucide-react';

interface WorkflowStepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ title, description, icon, color }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm border">
      <div className={cn("p-3 rounded-full mb-3", color)}>
        {icon}
      </div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const WorkflowDiagram: React.FC = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <WorkflowStep
          title="Define Infrastructure"
          description="Write Terraform code to declare your desired infrastructure state"
          icon={<CodeIcon className="h-6 w-6 text-white" />}
          color="bg-terraform"
        />
        <div className="hidden md:flex items-center justify-center">
          <ArrowRightIcon className="h-6 w-6 text-muted-foreground" />
        </div>
        <WorkflowStep
          title="Provision Resources"
          description="Terraform creates and manages infrastructure based on your code"
          icon={<CloudIcon className="h-6 w-6 text-white" />}
          color="bg-terraform-dark"
        />
        <div className="hidden md:flex items-center justify-center">
          <ArrowRightIcon className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>

      <div className="hidden md:flex justify-center my-4">
        <div className="w-0.5 h-12 bg-border"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <WorkflowStep
          title="Configure Systems"
          description="Ansible playbooks configure systems with required software and settings"
          icon={<ServerIcon className="h-6 w-6 text-white" />}
          color="bg-ansible"
        />
        <div className="hidden md:flex items-center justify-center">
          <ArrowRightIcon className="h-6 w-6 text-muted-foreground" />
        </div>
        <WorkflowStep
          title="Maintain & Update"
          description="Continually update infrastructure and configurations as needed"
          icon={<CodeIcon className="h-6 w-6 text-white" />}
          color="bg-ansible-dark"
        />
        <div className="hidden md:flex items-center justify-center">
          <ArrowRightIcon className="transform rotate-90 h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
