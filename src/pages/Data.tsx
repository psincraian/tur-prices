import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const historicalData = [
  {
    "rate_name": "TUR1",
    "date": "2024-10",
    "variable_price": "0.0511",
    "fixed_price": "3.26",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR2",
    "date": "2024-10",
    "variable_price": "0.0501",
    "fixed_price": "5.66",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR1",
    "date": "2024-07",
    "variable_price": "0.0409",
    "fixed_price": "3.26",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR2",
    "date": "2024-07",
    "variable_price": "0.04",
    "fixed_price": "5.66",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR1",
    "date": "2024-04",
    "variable_price": "0.0434",
    "fixed_price": "3.26",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR2",
    "date": "2024-04",
    "variable_price": "0.0409",
    "fixed_price": "5.66",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR1",
    "date": "2024-01",
    "variable_price": "0.0511",
    "fixed_price": "3.85",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR2",
    "date": "2024-01",
    "variable_price": "0.0481",
    "fixed_price": "7.12",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR3",
    "date": "2024-01",
    "variable_price": "0.0454",
    "fixed_price": "14.92",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR1",
    "date": "2023-10",
    "variable_price": "0.0467",
    "fixed_price": "3.85",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR2",
    "date": "2023-10",
    "variable_price": "0.0438",
    "fixed_price": "7.12",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR3",
    "date": "2023-10",
    "variable_price": "0.0454",
    "fixed_price": "14.92",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR1",
    "date": "2023-07",
    "variable_price": "0.0431",
    "fixed_price": "5.03",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR2",
    "date": "2023-07",
    "variable_price": "0.0403",
    "fixed_price": "9.52",
    "currency": "EUR"
  },
  {
    "rate_name": "TUR3",
    "date": "2023-07",
    "variable_price": "0.0454",
    "fixed_price": "14.92",
    "currency": "EUR"
  }
].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

export default function Data() {
  const { t } = useTranslation();
  const [selectedRate, setSelectedRate] = useState<'TUR1' | 'TUR2'>('TUR1');

  const filteredData = historicalData.filter(d => d.rate_name === selectedRate);

  const chartData = {
    labels: filteredData.map(d => {
      const date = new Date(d.date);
      return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long' });
    }),
    datasets: [
      {
        label: `${selectedRate} ${t('data.variablePrice')}`,
        data: filteredData.map(d => parseFloat(d.variable_price)),
        borderColor: selectedRate === 'TUR1' ? 'rgb(59, 130, 246)' : 'rgb(234, 88, 12)',
        backgroundColor: selectedRate === 'TUR1' ? 'rgba(59, 130, 246, 0.5)' : 'rgba(234, 88, 12, 0.5)',
      },
      {
        label: `${selectedRate} ${t('data.fixedPrice')}`,
        data: filteredData.map(d => parseFloat(d.fixed_price)),
        borderColor: selectedRate === 'TUR1' ? 'rgb(16, 185, 129)' : 'rgb(236, 72, 153)',
        backgroundColor: selectedRate === 'TUR1' ? 'rgba(16, 185, 129, 0.5)' : 'rgba(236, 72, 153, 0.5)',
        yAxisID: 'fixed',
      }
    ]
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: t('data.historicalPrices'),
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: '€/kWh'
        }
      },
      fixed: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: '€/month'
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6">{t('data.title')}</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <label htmlFor="rate-select" className="text-xl font-medium text-white">
            {t('data.selectRate')}:
          </label>
          <div className="flex space-x-4 w-full sm:w-auto">
            {['TUR1', 'TUR2'].map((rate) => (
              <button
                key={rate}
                onClick={() => setSelectedRate(rate as 'TUR1' | 'TUR2')}
                className={`flex-1 sm:flex-none px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 ${
                  selectedRate === rate
                    ? 'bg-white text-blue-600 shadow-md transform scale-105'
                    : 'bg-blue-400 text-white hover:bg-blue-300'
                }`}
              >
                {rate}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <Line options={options} data={chartData} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">{t('data.priceTable')}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t('data.date')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t('data.variablePrice')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t('data.fixedPrice')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredData.map((price) => (
                <tr key={price.date}>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {new Date(price.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long' })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {parseFloat(price.variable_price).toFixed(4)} €/kWh
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white">
                    {parseFloat(price.fixed_price).toFixed(2)} €/month
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}