// src/components/Header.jsx
import { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex flex-wrap justify-between items-center">
      <h1 className="text-2xl font-bold">News & Blog Dashboard</h1>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded border"
        />
        <button onClick={handleSearch} className="bg-white text-blue-500 p-2 rounded">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
