'use client';

import {useState} from 'react';
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {priceHistory} from '@/lib/data';

type RateType = 'variable' | 'fixed';

export function PriceHistoryChart() {
    const [selectedCategory, setSelectedCategory] = useState('TUR1');
    const [rateType, setRateType] = useState<RateType>('variable');

    const data = priceHistory
        .find((history) => history.category === selectedCategory)
        ?.prices.map((price) => ({
            date: new Date(price.date).toLocaleDateString('es-ES', {
                month: 'short',
                year: 'numeric',
            }),
            value: rateType === 'variable' ? price.variableRate : price.fixedRate,
        }));

    return (
        <Card className="p-6">
            <div className="mb-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                    {['TUR1', 'TUR2', 'TUR3'].map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? 'default' : 'outline'}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                </div>
                <div className="flex gap-2">
                    <Button
                        variant={rateType === 'variable' ? 'default' : 'outline'}
                        onClick={() => setRateType('variable')}
                    >
                        Variable Rate
                    </Button>
                    <Button
                        variant={rateType === 'fixed' ? 'default' : 'outline'}
                        onClick={() => setRateType('fixed')}
                    >
                        Fixed Rate
                    </Button>
                </div>
            </div>
            <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                        <XAxis
                            dataKey="date"
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                        />
                        <YAxis
                            stroke="#888888"
                            fontSize={12}
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(value) => `${value}€`}
                        />
                        <Tooltip/>
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={{strokeWidth: 4}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}