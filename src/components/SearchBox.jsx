import React from 'react'
//icons
import { ImSearch } from "react-icons/im";
//functions
import { createQueryObject } from '../helpers/helper';

function SearchBox({search,setSearch,setQuery}) {

    const SearchHandler = () => {
        setQuery(query => (createQueryObject(query,{search})))
      }
    
  return (
    <div>
        <input placeholder='Search...' type='text' value={search} onChange={(event) => setSearch(event.target.value.toLowerCase().trim())}/>
        <button onClick={SearchHandler}><ImSearch /></button>
    </div>
  )
}

export default SearchBox