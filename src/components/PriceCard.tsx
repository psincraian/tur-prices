import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GasPrice } from '../types/gas';

interface PriceCardProps {
  price: GasPrice;
  previousPrice?: GasPrice;
}

export default function PriceCard({ price, previousPrice }: PriceCardProps) {
  const { t } = useTranslation();
  const variablePriceDiff = previousPrice
    ? (parseFloat(price.variable_price) - parseFloat(previousPrice.variable_price)) * 100
    : 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-200 hover:shadow-xl">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{price.rate_name}</h3>
        {previousPrice && (
          <div className={`flex items-center ${variablePriceDiff >= 0 ? 'text-red-500' : 'text-green-500'}`}>
            {variablePriceDiff >= 0 ? (
              <TrendingUp className="h-5 w-5" />
            ) : (
              <TrendingDown className="h-5 w-5" />
            )}
            <span className="ml-1">{Math.abs(variablePriceDiff).toFixed(2)}%</span>
          </div>
        )}
      </div>
      
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('prices.variablePrice')}</p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {parseFloat(price.variable_price).toFixed(4)} €/kWh
          </p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{t('prices.fixedPrice')}</p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {parseFloat(price.fixed_price).toFixed(2)} €/month
          </p>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {t('prices.lastUpdated')}: {new Date(price.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long'
          })}
        </p>
      </div>
    </div>
  );
}