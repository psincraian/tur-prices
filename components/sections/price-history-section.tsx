import {PriceHistoryCharts} from '@/components/charts/price-history-charts';

export function PriceHistorySection() {
    return (
        <section className="py-12">
            <div className="container px-4 md:px-6">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter">Evolución de Precios</h2>
                    <p className="text-muted-foreground">
                        Histórico de tarifas variables y fijas por trimestre
                    </p>
                </div>
                <PriceHistoryCharts/>
            </div>
        </section>
    );
}