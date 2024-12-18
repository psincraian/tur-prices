'use client';

import {useState} from 'react';
import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Button} from '@/components/ui/button';
import {Card} from '@/components/ui/card';
import {priceHistory} from '@/lib/data';

export function PriceHistoryChart() {
    const [selectedCategory, setSelectedCategory] = useState('TUR1');

    const data = priceHistory
        .find((history) => history.category === selectedCategory)
        ?.prices.map((price) => ({
            date: new Date(price.date).toLocaleDateString('es-ES', {
                month: 'short',
                year: 'numeric',
            }),
            variableRate: price.variableRate,
            fixedRate: price.fixedRate,
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
                        <Tooltip
                            content={({active, payload, label}) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="font-medium">{label}</div>
                                                <div className="font-medium">Valor</div>
                                                <div className="text-muted-foreground">Tarifa Variable:</div>
                                                <div className="font-medium">{payload[0].value}€</div>
                                                <div className="text-muted-foreground">Tarifa Fija:</div>
                                                <div className="font-medium">{payload[1].value}€</div>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Legend/>
                        <Line
                            name="Tarifa Variable"
                            type="monotone"
                            dataKey="variableRate"
                            stroke="hsl(var(--primary))"
                            strokeWidth={2}
                            dot={{strokeWidth: 4}}
                        />
                        <Line
                            name="Tarifa Fija"
                            type="monotone"
                            dataKey="fixedRate"
                            stroke="hsl(var(--chart-2))"
                            strokeWidth={2}
                            dot={{strokeWidth: 4}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}