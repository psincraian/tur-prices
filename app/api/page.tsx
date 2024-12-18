import {CodeBlock} from '@/components/docs/code-block';
import {EndpointSection} from '@/components/docs/endpoint-section';

export default function ApiDocs() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container px-4 py-8 mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Documentación de la API</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Primeros Pasos</h2>
                    <div className="prose dark:prose-invert max-w-none">
                        <p>
                            La API de Precios TUR proporciona acceso a los precios regulados actuales e históricos del
                            gas en España.
                            La API es publica y no requiere ningun tipo de authentication.
                        </p>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Hostname</h2>
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="mb-4">
                            Para acceder a la API, simplemente utiliza el hostname.
                        </p>
                        <CodeBlock
                            language="json"
                            code="https://test.com"
                        />

                    </div>
                </section>

                <EndpointSection
                    title="Obtener Precios Actuales"
                    endpoint="/api/v1/prices/current"
                    method="GET"
                    description="Devuelve los precios TUR actuales para todas las categorías"
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
                    title="Obtener Historial de Precios"
                    endpoint="/api/v1/prices/history"
                    method="GET"
                    description="Devuelve el historial de precios TUR, opcionalmente filtrado por categoría"
                    params={[
                        {
                            name: "category",
                            type: "string",
                            description: "Categoría TUR (TUR1, TUR2, o TUR3)"
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
                    <h2 className="text-2xl font-semibold mb-4">Códigos de Error</h2>
                    <div className="grid gap-4">
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold">404 Recurso no encontrado</h3>
                            <p className="text-muted-foreground">El recurso que buscas no esta en nuestro sistema</p>
                        </div>
                        <div className="p-4 border rounded-lg">
                            <h3 className="font-semibold">429 Demasiadas Peticiones</h3>
                            <p className="text-muted-foreground">Límite de peticiones excedido (5 peticiones por
                                minuto)</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}