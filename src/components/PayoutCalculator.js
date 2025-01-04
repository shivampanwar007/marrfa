// src/components/PayoutCalculator.jsx
import { useState, useEffect } from 'react';

const PayoutCalculator = ({ articles }) => {
  const [payoutRates, setPayoutRates] = useState(() => {
    const savedRates = localStorage.getItem('payoutRates');
    return savedRates ? JSON.parse(savedRates) : { news: 10, blog: 5 };
  });

  useEffect(() => {
    localStorage.setItem('payoutRates', JSON.stringify(payoutRates));
  }, [payoutRates]);

  const calculatePayout = () =>
    articles.reduce(
      (total, article) => total + (payoutRates[article.type] || 0),
      0
    );

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold">Payout Calculator</h2>
      <div className="flex flex-wrap gap-4">
        <div>
          <label>News Rate:</label>
          <input
            type="number"
            value={payoutRates.news}
            onChange={(e) =>
              setPayoutRates((prev) => ({ ...prev, news: Number(e.target.value) }))}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label>Blog Rate:</label>
          <input
            type="number"
            value={payoutRates.blog}
            onChange={(e) =>
              setPayoutRates((prev) => ({ ...prev, blog: Number(e.target.value) }))}
            className="border p-2 rounded"
          />
        </div>
      </div>
      <p className="mt-4 text-lg">Total Payout: ${calculatePayout()}</p>
    </div>
  );
};

export default PayoutCalculator;
