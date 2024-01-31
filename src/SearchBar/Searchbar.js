import { useState } from 'react';
import './Searchbar.css'


const SearchBar = ({onSearch}) =>{
  const [searchValue, setSearchValue] = useState("")

  

  const handleSubmit = (e) => {
    onSearch(searchValue)
  }

  return (
    <div className='search-bar'>
        <input
            placeholder='Enter city name'
            type='text'
            value={searchValue}
            onChange={(e)=>{
                setSearchValue(e.target.value)
            }}
        />

        <button type='submit' onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default SearchBar;
