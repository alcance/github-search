import React from 'react';

const styles = {
  container: {
    margin: 'auto',
    textAlign: 'center',
    padding: '15px',
  },
  border: '4px solid #e6e6e6',
  height: '40px',
  fontSize: '22px',
  fontWeight: '900',
  width: '90%',
}

const Search = ({ handleChange }) => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Search"
        style={styles}
        onChange={handleChange}
      >
      </input>
    </div>
  )
}

export default Search;