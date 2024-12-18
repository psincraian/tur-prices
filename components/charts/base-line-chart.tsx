'use client';

import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {Card} from '@/components/ui/card';

interface BaseLineChartProps {
    data: Array<{
        date: string;
        value: number;
    }>;
    title: string;
    color?: string;
    yAxisFormatter?: (value: number) => string;
}

export function BaseLineChart({
                                  data,
                                  title,
                                  color = "hsl(var(--primary))",
                                  yAxisFormatter = (value) => `${value}€`
                              }: BaseLineChartProps) {
    return (
        <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <div className="h-[300px]">
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
                            tickFormatter={yAxisFormatter}
                        />
                        <Tooltip
                            content={({active, payload, label}) => {
                                if (active && payload && payload.length) {
                                    return (
                                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="font-medium">{label}</div>
                                                <div
                                                    className="font-medium">{payload[0].value !== undefined ? yAxisFormatter(payload[0].value as number) : 0}</div>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            strokeWidth={2}
                            dot={{strokeWidth: 4}}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
}