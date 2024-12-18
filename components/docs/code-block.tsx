'use client';

import {useState} from 'react';
import {Button} from '@/components/ui/button';
import {Check, Copy} from 'lucide-react';

interface CodeBlockProps {
    code: string;
    language: string;
}

export function CodeBlock({code, language}: CodeBlockProps) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative">
      <pre className={`language-${language} p-4 rounded-lg bg-muted overflow-x-auto`}>
        <code>{code}</code>
      </pre>
            <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2"
                onClick={copyToClipboard}
            >
                {copied ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
            </Button>
        </div>
    );
}