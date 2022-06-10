import React from 'react';

const SearchBar = (props) => {
  const handleChange = (event) => {
    const { fetchGiphyAPI } = props;
    fetchGiphyAPI(event.currentTarget.value);
  };
  return (
    <div>
      <input onKeyUp={handleChange} type="text" className="form-search form-control" />
    </div>
  );
};

export default SearchBar;
