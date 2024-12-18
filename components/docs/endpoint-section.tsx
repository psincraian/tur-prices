import {CodeBlock} from './code-block';

interface EndpointSectionProps {
    title: string;
    endpoint: string;
    method: string;
    description: string;
    params?: Array<{
        name: string;
        type: string;
        description: string;
    }>;
    responseExample: object;
}

export function EndpointSection({
                                    title,
                                    endpoint,
                                    method,
                                    description,
                                    params,
                                    responseExample,
                                }: EndpointSectionProps) {
    return (
        <section className="mb-12" id={endpoint.replace(/\//g, '-')}>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="space-y-4">
                <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded-md bg-primary text-primary-foreground text-sm font-mono">
            {method}
          </span>
                    <code className="px-2 py-1 rounded-md bg-muted">{endpoint}</code>
                </div>

                <p className="text-muted-foreground">{description}</p>

                {params && params.length > 0 && (
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Parameters</h3>
                        <div className="grid gap-2">
                            {params.map((param) => (
                                <div key={param.name} className="p-2 border rounded-lg">
                                    <div className="font-mono text-sm">{param.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {param.type} - {param.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div>
                    <h3 className="text-lg font-semibold mb-2">Example Response</h3>
                    <CodeBlock
                        language="json"
                        code={JSON.stringify(responseExample, null, 2)}
                    />
                </div>
            </div>
        </section>
    );
}