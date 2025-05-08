
import React from 'react';
import Navigation from '@/components/Navigation';
import Section from '@/components/Section';
import CodeSnippet from '@/components/CodeSnippet';
import WorkflowDiagram from '@/components/WorkflowDiagram';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { 
  ServerIcon, CloudIcon, RepeatIcon, ShieldIcon, 
  CodeIcon, LayersIcon, GitBranchIcon, FileTextIcon 
} from 'lucide-react';

const terraformExample = `# Define AWS provider
provider "aws" {
  region = "us-west-2"
}

# Create a VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
  
  tags = {
    Name = "main-vpc"
    Environment = "production"
  }
}

# Create an EC2 instance
resource "aws_instance" "web_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  vpc_security_group_ids = [aws_security_group.web.id]
  
  tags = {
    Name = "Web Server"
  }
}`;

const ansibleExample = `---
- name: Configure web server
  hosts: web_servers
  become: true
  
  vars:
    http_port: 80
    server_name: example.com
  
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
        update_cache: yes
    
    - name: Configure nginx site
      template:
        src: templates/nginx.conf.j2
        dest: /etc/nginx/sites-available/default
      notify: restart nginx
      
  handlers:
    - name: restart nginx
      service:
        name: nginx
        state: restarted`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="flex flex-col items-center text-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center justify-center mb-6 space-x-2">
                <span className="h-10 w-10 rounded bg-terraform flex items-center justify-center text-white font-bold text-xl">T</span>
                <span className="text-3xl font-light">+</span>
                <span className="h-10 w-10 rounded bg-ansible flex items-center justify-center text-white font-bold text-xl">A</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Infrastructure as Code
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Build, deploy, and manage infrastructure efficiently with Terraform and Ansible
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-terraform hover:bg-terraform-dark"
                  onClick={() => document.getElementById('terraform')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Terraform
                </Button>
                <Button 
                  size="lg" 
                  className="bg-ansible hover:bg-ansible-dark"
                  onClick={() => document.getElementById('ansible')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Discover Ansible
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </section>
      
      {/* Overview Section */}
      <Section 
        id="overview" 
        title="What is Infrastructure as Code?"
        description="Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Consistency"
            description="Eliminate configuration drift by defining infrastructure in code"
            icon={<RepeatIcon className="h-8 w-8" />}
          />
          <FeatureCard
            title="Scalability"
            description="Easily replicate infrastructure across different environments"
            icon={<LayersIcon className="h-8 w-8" />}
          />
          <FeatureCard
            title="Collaboration"
            description="Share and review infrastructure changes using version control"
            icon={<GitBranchIcon className="h-8 w-8" />}
          />
          <FeatureCard
            title="Security"
            description="Audit and validate infrastructure changes before deploying"
            icon={<ShieldIcon className="h-8 w-8" />}
          />
        </div>
      </Section>
      
      {/* Terraform Section */}
      <Section
        id="terraform"
        title="Terraform: Infrastructure Provisioning"
        description="Terraform is a tool for building, changing, and versioning infrastructure safely and efficiently. It enables you to define infrastructure resources in human-readable configuration files."
        className="bg-gradient-to-b from-white to-purple-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CloudIcon className="h-6 w-6 text-terraform shrink-0" />
                <div>
                  <p className="font-medium">Cloud Agnostic</p>
                  <p className="text-muted-foreground text-sm">Works with AWS, Azure, GCP, and many other providers</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CodeIcon className="h-6 w-6 text-terraform shrink-0" />
                <div>
                  <p className="font-medium">Declarative Syntax</p>
                  <p className="text-muted-foreground text-sm">Focus on the end result, not the step-by-step process</p>
                </div>
              </li>
              <li className="flex gap-3">
                <FileTextIcon className="h-6 w-6 text-terraform shrink-0" />
                <div>
                  <p className="font-medium">State Management</p>
                  <p className="text-muted-foreground text-sm">Track and manage resource state to avoid configuration drift</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <CodeSnippet 
              code={terraformExample} 
              language="hcl" 
              title="main.tf"
            />
          </div>
        </div>
      </Section>
      
      {/* Ansible Section */}
      <Section
        id="ansible"
        title="Ansible: Configuration Management"
        description="Ansible is a simple automation tool that automates software provisioning, configuration management, and application deployment. It uses YAML to describe automation jobs in a way that approaches plain English."
        className="bg-gradient-to-b from-purple-50 to-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1">
            <CodeSnippet 
              code={ansibleExample} 
              language="yaml" 
              title="webserver.yml"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <ServerIcon className="h-6 w-6 text-ansible shrink-0" />
                <div>
                  <p className="font-medium">Agentless</p>
                  <p className="text-muted-foreground text-sm">No need to install agents on managed nodes</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CodeIcon className="h-6 w-6 text-ansible shrink-0" />
                <div>
                  <p className="font-medium">Simple YAML Syntax</p>
                  <p className="text-muted-foreground text-sm">Easy to read and write playbooks with minimal learning curve</p>
                </div>
              </li>
              <li className="flex gap-3">
                <RepeatIcon className="h-6 w-6 text-ansible shrink-0" />
                <div>
                  <p className="font-medium">Idempotence</p>
                  <p className="text-muted-foreground text-sm">Run playbooks multiple times without changing the result</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Workflow Section */}
      <Section
        id="workflow"
        title="Terraform + Ansible Workflow"
        description="The power of Infrastructure as Code comes from combining tools that excel at different parts of the process. Terraform handles infrastructure provisioning, while Ansible excels at configuration management."
      >
        <WorkflowDiagram />
      </Section>
      
      {/* Examples Section */}
      <Section
        id="examples"
        title="Complete Example"
        description="Here's a practical example of using Terraform and Ansible together to deploy a web application."
        className="bg-muted"
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">1. Infrastructure Provisioning with Terraform</h3>
            <CodeSnippet
              code={`# Create a web server instance
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  key_name      = aws_key_pair.deployer.key_name
  
  vpc_security_group_ids = [aws_security_group.web.id]
  
  tags = {
    Name = "WebServer"
  }
  
  # Generate inventory file for Ansible
  provisioner "local-exec" {
    command = "echo '\\n[webservers]\\n${self.public_ip}' >> inventory.ini"
  }
}`}
              language="hcl"
              title="web_server.tf"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">2. Configuration with Ansible</h3>
            <CodeSnippet
              code={`---
- name: Configure web application
  hosts: webservers
  become: true
  
  tasks:
    - name: Install required packages
      apt:
        name:
          - nginx
          - python3-pip
          - git
        state: present
        update_cache: yes
    
    - name: Clone application repository
      git:
        repo: https://github.com/example/webapp.git
        dest: /opt/webapp
    
    - name: Install Python dependencies
      pip:
        requirements: /opt/webapp/requirements.txt
        
    - name: Start application service
      systemd:
        name: webapp
        enabled: yes
        state: started`}
              language="yaml"
              title="deploy_webapp.yml"
            />
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">3. Execute the Workflow</h3>
            <CodeSnippet
              code={`# Initialize Terraform
terraform init

# Plan and apply infrastructure
terraform plan
terraform apply -auto-approve

# Run Ansible playbook on provisioned servers
ansible-playbook -i inventory.ini deploy_webapp.yml`}
              language="bash"
              title="deployment.sh"
            />
          </div>
        </div>
      </Section>
      
      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="container py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="flex items-center gap-1 mr-2">
                <span className="h-6 w-6 rounded-sm bg-terraform text-white flex items-center justify-center font-bold text-sm">T</span>
                <span className="h-6 w-6 rounded-sm bg-ansible text-white flex items-center justify-center font-bold text-sm">A</span>
              </div>
              <span className="font-semibold">IaC Explorer</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 • Built for educational purposes
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
