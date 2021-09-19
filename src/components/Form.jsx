import React, { useState, useEffect } from 'react';
import '../styles/Form.css';

export default function Form() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const delayFunc = setTimeout(() => {
      console.log(searchTerm);
      // Send Axios request here
    }, 1000);

    return () => clearTimeout(delayFunc);
  }, [searchTerm]);

  return (
    <div className="search-container">
      <div className="search">
        <label htmlFor="books"></label>
        <span className="search-icon">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="search-field"
          name="books"
          placeholder="Search the books..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button>Search</button>
    </div>
  );
}
