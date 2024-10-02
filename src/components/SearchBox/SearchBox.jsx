import { useState, useEffect } from 'react';
import s from './SearchBox.module.css';

const SearchBox = ({ setSearchUser }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim()) {
        setSearchUser(searchTerm.toLowerCase());
        setError(''); 
      } else if (searchTerm === '') {
        setSearchUser('');
        setError(''); 
      } else {
        setError('Please enter a valid search term.');
      }
    }, 300); 

    return () => clearTimeout(timer); 
  }, [searchTerm, setSearchUser]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={s.searchWrap}>
      <label htmlFor="searchInput" className={s.searchLabel}>
        Find contact by name
      </label>
      <input
        id="searchInput"
        className={`${s.searchInput} ${error ? s.errorInput : ''}`}
        type="text"
        placeholder="Type a name..."
        onChange={handleChange}
        aria-label="Search for contacts by name"
      />
      {error && <span className={s.errorMessage}>{error}</span>}
    </div>
  );
};

export default SearchBox;
