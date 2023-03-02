import {React,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css';
import { faFilter, faChevronUp,faChevronDown,faMagnifyingGlass, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

function Header (){

    const [filter,setFilter] = useState(false);

    const handleFilterIcon=()=>{
        setFilter(!filter);
    }

  return (
    <div className='header'>
      <div className='above-header'>
        <div className='filter'>
          <div className='filter-content'>
            <FontAwesomeIcon icon={faFilter} />
            <h2> Filter </h2>
            {filter?<FontAwesomeIcon onClick={handleFilterIcon}icon={faChevronUp} />:<FontAwesomeIcon onClick={handleFilterIcon}icon={faChevronDown} />}
          </div>
        </div>
        
          <div className='search-header'>
            <input type='text' placeholder='Event Name'  />
            <FontAwesomeIcon icon={faMagnifyingGlass} /> 
          </div>
      </div>

     {filter? <div className='filter-buttons'>
        <div className='filter-row'>
          <div className='filter-content'>
            <FontAwesomeIcon icon={faCircleDot} />
            <p>All</p>
          </div>
          <div className='filter-content'>
            <p>Bookmarked</p>
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
        <div className='filter-row'>
          <div className='filter-content'>
            <FontAwesomeIcon icon={faCircle} />
            <p> Registered </p>
          </div>
          <div className='filter-content'>
            <p> Seats Available </p>
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </div>
      </div>:null}
    </div>
  );
};

export default Header;