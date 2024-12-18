import {PriceCard} from '@/components/ui/price-card';
import {getCurrentPrices} from "@/lib/data";

export function PriceCardsSection() {
    return (
        <section className="py-12">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {getCurrentPrices().map((price) => (
                        <PriceCard
                            key={price.category}
                            category={price.category}
                            variableRate={price.variableRate}
                            fixedRate={price.fixedRate}
                            previousVariableRate={price.previousVariableRate}
                            previousFixedRate={price.previousFixedRate}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}