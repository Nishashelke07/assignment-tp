import React from 'react';
import './styles.css';

const SearchBar = ({ query, onQueryChange }) => {
  return (
    <input
      type="text"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      placeholder="Search by Username..."
      className="search-bar"
    />
  );
};

export default SearchBar;
