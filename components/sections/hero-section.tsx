import {getCurrentPrices} from '@/lib/data';

export function HeroSection() {
    return (
        <section className="relative py-24">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                            Precios TUR
                        </h1>
                    </div>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Seguimiento de precios regulados del gas natural en España. La Tarifa de Último Recurso (TUR)
                        se actualiza trimestralmente según el mercado mayorista.
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Última actualización: {new Date(getCurrentPrices()[0].date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                    </p>
                </div>
            </div>
        </section>
    );
}