export const priceHistory = [
    {
        category: 'TUR1',
        prices: [
            {date: '2023-07-01', variableRate: 0.0431, fixedRate: 5.03},
            {date: '2023-10-01', variableRate: 0.0467, fixedRate: 3.85},
            {date: '2024-01-01', variableRate: 0.0511, fixedRate: 3.85},
            {date: '2024-04-01', variableRate: 0.0439, fixedRate: 3.85},
            {date: '2024-07-01', variableRate: 0.0439, fixedRate: 3.85},
            {date: '2024-10-01', variableRate: 0.0511, fixedRate: 3.26},
            {date: '2025-01-01', variableRate: 0.0575, fixedRate: 3.26},
            {date: '2025-04-01', variableRate: 0.0438, fixedRate: 3.26}
        ]
    },
    {
        category: 'TUR2',
        prices: [
            {date: '2023-07-01', variableRate: 0.0402, fixedRate: 9.48},
            {date: '2023-10-01', variableRate: 0.0438, fixedRate: 7.12},
            {date: '2024-01-01', variableRate: 0.0481, fixedRate: 7.12},
            {date: '2024-04-01', variableRate: 0.0409, fixedRate: 7.12},
            {date: '2024-07-01', variableRate: 0.0409, fixedRate: 7.12},
            {date: '2024-10-01', variableRate: 0.0501, fixedRate: 5.66},
            {date: '2025-01-01', variableRate: 0.0565, fixedRate: 5.66},
            {date: '2025-04-01', variableRate: 0.0427, fixedRate: 5.66}
        ]
    },
    {
        category: 'TUR3',
        prices: [
            {date: '2023-07-01', variableRate: 0.0380, fixedRate: 20.44},
            {date: '2023-10-01', variableRate: 0.0411, fixedRate: 14.92},
            {date: '2024-01-01', variableRate: 0.0454, fixedRate: 14.92},
            {date: '2024-04-01', variableRate: 0.0382, fixedRate: 14.92},
            {date: '2024-07-01', variableRate: 0.0382, fixedRate: 14.92},
            {date: '2024-10-01', variableRate: 0.0462, fixedRate: 13.37},
            {date: '2025-01-01', variableRate: 0.0526, fixedRate: 13.37},
            {date: '2025-04-01', variableRate: 0.0389, fixedRate: 13.37},
        ]
    }
] as const;


export function getCurrentPrices() {
    return priceHistory.map(({category, prices}) => {
        const currentPrice = prices[prices.length - 1];
        const previousPrice = prices[prices.length - 2] || null;

        return {
            category,
            variableRate: currentPrice.variableRate,
            fixedRate: currentPrice.fixedRate,
            date: currentPrice.date,
            previousVariableRate: previousPrice?.variableRate || null,
            previousFixedRate: previousPrice?.fixedRate || null
        };
    });
}

