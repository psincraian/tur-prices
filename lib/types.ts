export interface TURPrice {
    category: 'TUR1' | 'TUR2' | 'TUR3';
    variableRate: number;
    fixedRate: number;
    date: string;
    previousVariableRate?: number;
    previousFixedRate?: number;
}

export interface PriceHistory {
    category: 'TUR1' | 'TUR2' | 'TUR3';
    prices: {
        date: string;
        variableRate: number;
        fixedRate: number;
    }[];
}