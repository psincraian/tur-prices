import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {Github, Mail} from 'lucide-react';
import Link from 'next/link';

export default function HelpPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container px-4 py-8 mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Ayuda y Contacto</h1>

                <div className="grid gap-8">
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
                        <Card className="p-6">
                            <div className="flex flex-col space-y-4">
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-5 w-5"/>
                                    <span>contacto@precios-tur.es</span>
                                </div>
                                <p className="text-muted-foreground">
                                    Para consultas, sugerencias o reportar errores, no dudes en contactarnos.
                                </p>
                            </div>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Contribuir</h2>
                        <Card className="p-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Añadir Nuevos Precios</h3>
                                <p className="text-muted-foreground">
                                    Los precios se actualizan trimestralmente. Para contribuir con nuevos datos:
                                </p>
                                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                                    <li>Haz un fork del repositorio en GitHub</li>
                                    <li>Actualiza el archivo <code>lib/data.ts</code> con los nuevos precios</li>
                                    <li>Crea una Pull Request con los cambios</li>
                                    <li>Incluye un enlace a la fuente oficial de los precios</li>
                                </ol>
                                <div className="pt-4">
                                    <Link href="https://github.com/precios-tur/website" target="_blank">
                                        <Button className="flex items-center space-x-2">
                                            <Github className="h-5 w-5"/>
                                            <span>Ver en GitHub</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Preguntas Frecuentes</h2>
                        <div className="grid gap-4">
                            <Card className="p-6">
                                <h3 className="font-semibold mb-2">¿Con qué frecuencia se actualizan los precios?</h3>
                                <p className="text-muted-foreground">
                                    Los precios TUR se actualizan trimestralmente según la normativa vigente.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <h3 className="font-semibold mb-2">¿De dónde proceden los datos?</h3>
                                <p className="text-muted-foreground">
                                    Los datos se obtienen directamente de los Boletines Oficiales del Estado (BOE) donde
                                    se publican las actualizaciones de las tarifas TUR.
                                </p>
                            </Card>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}