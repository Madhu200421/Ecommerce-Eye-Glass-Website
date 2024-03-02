import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

export default function SearchItem({search,handleSearch}) {

    const handleClick=() => {
        handleSearch();
    }
  return (
    <div className='search-out'>
      <div className={search?"search-container open":"search-container"}>
        <div className={search?"search up":"search"}>
            <div className='search-top'>
                <h6 className='top-txt'>TYPE TO SEARCH</h6>
                <button className='top-button' onClick={handleClick}>X</button>
            </div>
            <div className="search-bottom">
                <input type="text" className='search-text' placeholder='Search products......'/>
                <button className='search-i rot'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
        </div>
        <div className="bg" onClick={handleClick}>
        </div>
      </div>
      
    </div>
  )
}
