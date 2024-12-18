import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {cn} from "@/lib/utils";
import {ArrowDownIcon, ArrowUpIcon} from "lucide-react";

interface PriceCardProps {
    category: string;
    variableRate: number;
    fixedRate: number;
    previousVariableRate?: number;
    previousFixedRate?: number;
    className?: string;
}

export function PriceCard({
                              category,
                              variableRate,
                              fixedRate,
                              previousVariableRate,
                              previousFixedRate,
                              className,
                          }: PriceCardProps) {
    const variableChange = previousVariableRate
        ? ((variableRate - previousVariableRate) / previousVariableRate) * 100
        : 0;

    return (
        <Card className={cn("w-full", className)}>
            <CardHeader>
                <CardTitle className="text-2xl font-bold">{category}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium">Variable Rate</h3>
                            {variableChange !== 0 && (
                                <div className={cn(
                                    "flex items-center text-sm",
                                    variableChange < 0 ? "text-green-600" : "text-red-600"
                                )}>
                                    {variableChange < 0 ? (
                                        <ArrowDownIcon className="h-4 w-4 mr-1"/>
                                    ) : (
                                        <ArrowUpIcon className="h-4 w-4 mr-1"/>
                                    )}
                                    {Math.abs(variableChange).toFixed(2)}%
                                </div>
                            )}
                        </div>
                        <p className="text-3xl font-bold">
                            {variableRate.toFixed(5)} €/kWh
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Fixed Monthly Rate</h3>
                        <p className="text-3xl font-bold">{fixedRate.toFixed(2)} €/month</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}