import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from 'lucide-react';

export default function Api() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">API Documentation</h1>
      
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Endpoints</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Code className="mr-2" /> GET /api/prices
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Retrieve current and historical gas prices.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md">
              <pre className="text-sm">
{`{
  "prices": [
    {
      "rate_name": "TUR1",
      "date": "2024-01",
      "variable_price": "0.0511",
      "fixed_price": "3.85",
      "currency": "EUR"
    }
  ]
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}