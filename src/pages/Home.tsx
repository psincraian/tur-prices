import React from 'react';
import { Info, HelpCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PriceCard from '../components/PriceCard';
import { SUPPLIERS } from '../types/gas';

const MOCK_PRICES = [
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
  }
];

const PREVIOUS_PRICES = [
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
  }
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
      </section>

      {/* Current Prices Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t('prices.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PRICES.map((price, index) => (
            <PriceCard
              key={price.rate_name}
              price={price}
              previousPrice={PREVIOUS_PRICES[index]}
            />
          ))}
        </div>
      </section>

      {/* About TUR Section */}
      <section className="bg-blue-50 dark:bg-gray-800 rounded-lg p-6">
        <div className="flex items-start space-x-4">
          <Info className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.title')}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t('about.description')}
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
              <li>{t('about.rates.tur1')}</li>
              <li>{t('about.rates.tur2')}</li>
              <li>{t('about.rates.tur3')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Suppliers Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t('suppliers.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SUPPLIERS.map((supplier) => (
            <div
              key={supplier.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {supplier.name}
              </h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>
                  <strong>{t('suppliers.phone')}:</strong> {supplier.phone}
                </p>
                <p>
                  <strong>{t('suppliers.coverage')}:</strong> {supplier.coverage.join(', ')}
                </p>
                <a
                  href={supplier.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {t('suppliers.visitWebsite')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {t('faq.title')}
        </h2>
        <div className="space-y-6">
          {[
            {
              q: t('faq.questions.q1.question'),
              a: t('faq.questions.q1.answer')
            },
            {
              q: t('faq.questions.q2.question'),
              a: t('faq.questions.q2.answer')
            },
            {
              q: t('faq.questions.q3.question'),
              a: t('faq.questions.q3.answer')
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow p-6"
            >
              <div className="flex space-x-4">
                <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}