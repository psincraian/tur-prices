'use client';

import {useState} from 'react';
import {BaseLineChart} from './base-line-chart';
import {CategorySelector} from './category-selector';
import {priceHistory} from '@/lib/data';

export function PriceHistoryCharts() {
    const [selectedCategory, setSelectedCategory] = useState('TUR1');

    const selectedData = priceHistory.find((history) => history.category === selectedCategory)?.prices;

    const variableRateData = selectedData?.map((price) => ({
        date: new Date(price.date).toLocaleDateString('es-ES', {
            month: 'short',
            year: 'numeric',
        }),
        value: price.variableRate,
    }));

    const fixedRateData = selectedData?.map((price) => ({
        date: new Date(price.date).toLocaleDateString('es-ES', {
            month: 'short',
            year: 'numeric',
        }),
        value: price.fixedRate,
    }));

    return (
        <div className="space-y-6">
            <CategorySelector
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />
            <div className="grid gap-6 md:grid-cols-2">
                <BaseLineChart
                    data={variableRateData || []}
                    title="Tarifa Variable (€/kWh)"
                    color="hsl(var(--primary))"
                    yAxisFormatter={(value) => `${value.toFixed(5)}€`}
                />
                <BaseLineChart
                    data={fixedRateData || []}
                    title="Tarifa Fija (€/mes)"
                    color="hsl(var(--chart-2))"
                    yAxisFormatter={(value) => `${value.toFixed(2)}€`}
                />
            </div>
        </div>
    );
}