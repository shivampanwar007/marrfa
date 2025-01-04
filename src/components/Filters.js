// Filters.jsx
import { useState } from 'react';

const Filters = ({ onFilter }) => {
  const [author, setAuthor] = useState('');
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const applyFilters = () => {
    onFilter({ author, type, startDate, endDate });
  };

  return (
    <div className="flex gap-4 p-4 bg-gray-100 rounded-md">
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 rounded"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Type</option>
        <option value="news">News</option>
        <option value="blog">Blog</option>
      </select>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={applyFilters} className="bg-blue-500 text-white p-2 rounded">
        Apply
      </button>
    </div>
  );
};

export default Filters;
