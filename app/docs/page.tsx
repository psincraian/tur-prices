import {CodeBlock} from '@/components/docs/code-block';
import {EndpointSection} from '@/components/docs/endpoint-section';
import {SearchBar} from '@/components/docs/search-bar';

export default function ApiDocs() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container px-4 py-8 mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">API Documentation</h1>

                <SearchBar/>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                    <div className="prose dark:prose-invert max-w-none">
                        <p>
                            The TUR Prices API provides access to current and historical regulated gas prices in Spain.
                            All requests require authentication using an API key passed in
                            the <code>x-api-key</code> header.
                        </p>

                        <h3>Authentication</h3>
                        <p>
                            Include your API key in all requests using the <code>x-api-key</code> header:
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`curl -H "x-api-key: your-api-key" https://api.precios-tur.es/v1/prices/current`}
                        />
                    </div>
                </section>

                <EndpointSection
                    title="Get Current Prices"
                    endpoint="/api/v1/prices/current"
                    method="GET"
                    description="Returns the current TUR prices for all categories"
                    responseExample={{
                        data: [
                            {
                                category: "TUR1",
                                variableRate: 0.05567,
                                fixedRate: 4.35,
                                date: "2024-01-01"
                            }
                        ]
                    }}
                />

                <EndpointSection
                    title="Get Price History"
                    endpoint="/api/v1/prices/history"
                    method="GET"
                    description="Returns historical TUR prices, optionally filtered by category"
                    params={[
                        {
                            name: "category",
                            type: "string",
                            description: "Optional. Filter by TUR category (TUR1, TUR2, or TUR3)"
                        }
                    ]}
                    responseExample={{
                        data: [
                            {
                                category: "TUR1",
                                prices: [
                                    {
                                        date: "2024-01-01",
                                        variableRate: 0.05567,
                                        fixedRate: 4.35
                                    }
                                ]
                            }
                        ]
                    }}
                />

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Error Codes</h2>
                    <div className="grid gap-4">
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold">401 Unauthorized</h3>
                            <p className="text-muted-foreground">Invalid or missing API key</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold">429 Too Many Requests</h3>
                            <p className="text-muted-foreground">Rate limit exceeded (60 requests per minute)</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}