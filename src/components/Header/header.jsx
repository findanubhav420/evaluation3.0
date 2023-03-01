import {React,useState} from "react";

import "./header.css";

function Header() {
    const [filter,setFilter] = useState(true);
    function handleClick() {
        setFilter(!filter);
    }
    return !filter?(
        <div className="header">
            <div className="filter-icon">
                <i className="fas fa-filter"></i>
                <button onClick={handleClick}className="filter-button">FILTER</button>
            </div>
            <div className="search-bar">
                <input id="search-input" type="text" placeholder="EVENT NAME"/>
                <button className="search-button">SEARCH</button>
            </div>
        </div>):(
            <>
             <div className="header">
            <div className="filter-icon">
                <i className="fas fa-filter"></i>
                <button onClick={handleClick}className="filter-button">FILTER</button>
            </div>
            <div className="search-bar">
                <input id="search-input" type="text" placeholder="EVENT NAME"/>
                <button className="search-button">SEARCH</button>
            </div>
            </div>
         <div className="filter-options">
         <label>
        <input type="checkbox" onChange={() => {}} />
        <span>ALL</span>
        </label>
         <label>
        <input type="checkbox" onChange={() => {}} />
        <span>REGISTERED</span>
        </label>
         <label>
        <span>BOOKMARKED</span>
        <input type="checkbox" onChange={() => {}} />
        </label>
         <label>
        <span>SEATS AVAILABLE</span>
        <input type="checkbox" onChange={() => {}} />
        </label>
         </div>
            </>
        )
}

export default Header;