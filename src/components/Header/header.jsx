import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faMagnifyingGlass, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './header.css';

function Header (){


  return (
    <div className='header'>
      <div className='above-header'>
        <div className='filter'>
          <div className='filter-symbol'>
            <FontAwesomeIcon icon={faFilter} />
            <h3> Filter </h3>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </div>
        <div className='search'>
          <div className='search-header'>
            <input id="search-input" type='text' placeholder='Event Name'  />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <div className='filter-buttons'>
          <div className='filter-text'>
            <FontAwesomeIcon icon={faCircleDot} />
            <p>All</p>
          </div>
          <div className='filter-text'>
            <p>Bookmarked</p>
            <FontAwesomeIcon icon={faCircle} />
        </div>
        <div className='filter-buttons'>
          <div className='filter-text'>
            <FontAwesomeIcon icon={faCircle} />
            <p> Registered </p>
          </div>
          <div className='filter-text'>
            <p> Seats Available </p>
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;