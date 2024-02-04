import React, { useState, useRef } from 'react';

const SearchComponent = () => {
  const inputRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchClick = () => {
    inputRef.current.focus();
    setIsExpanded(!isExpanded);
  };

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    // 在這裡執行實際的搜索邏輯，例如發送 API 請求
    console.log('Search term:', searchTerm);
    
    setIsExpanded(false);
  };

  return (
    <div ref={inputRef}>
      <div className={`search-bar ${isExpanded ? 'expanded' : ''}`}>
        {!isExpanded && (
        <i className="search-icon" onClick={handleSearchClick}>🔍</i>
        )}

        {isExpanded && (
            <form onSubmit={handleSearchSubmit}>
                <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Search..."
                />
                <button type="submit">Search</button>
            </form>
        )}

      </div>
    </div>
  );
};

export default SearchComponent;
