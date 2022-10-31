import React from "react";

const SearchInput = ({ filterEmojis }) => {
  return (
    <div className="search-input-wrapper">
      <div>😺 Emoji Search 😼</div>
      <label htmlFor="searchInput">
        <input type="text" name="searchInput" onChange={filterEmojis} />
      </label>
    </div>
  );
};

export default SearchInput;
