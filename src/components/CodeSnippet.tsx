
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CheckIcon, CopyIcon } from 'lucide-react';

interface CodeSnippetProps {
  code: string;
  language: 'hcl' | 'yaml' | 'bash';
  title?: string;
  className?: string;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, language, title, className }) => {
  const [copied, setCopied] = React.useState(false);

  const languageColors = {
    hcl: 'text-terraform',
    yaml: 'text-ansible',
    bash: 'text-primary'
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-md border bg-muted/40 my-4", className)}>
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <div className={cn("h-3 w-3 rounded-full", {
              'bg-terraform': language === 'hcl',
              'bg-ansible': language === 'yaml',
              'bg-primary': language === 'bash'
            })}></div>
            <span className="text-sm font-medium">{title}</span>
          </div>
          <span className={cn("text-xs font-mono", languageColors[language])}>
            {language === 'hcl' ? 'Terraform' : language === 'yaml' ? 'Ansible' : 'Shell'}
          </span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className={cn("font-mono", languageColors[language])}>
            {code}
          </code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8"
          onClick={copyToClipboard}
        >
          {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default CodeSnippet;
