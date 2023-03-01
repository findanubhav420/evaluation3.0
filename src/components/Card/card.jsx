import {React, useState} from "react";
import moment from "moment-timezone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as  faBookmark2} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { UPDATE_EVENT } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import { useNavigate } from 'react-router-dom';

import "./card.css";
// import Registered from "../../assets/icons/registered.svg";

function Card(props) {
    const [registered,setRegistered] = useState(props.isRegistered);
    const [bookmarked,setBookmarked] = useState(props.isBookmarked);
    const [available,setAvailable] = useState(props.areSeatsAvailable);

  const time = moment(props.datetime);
  const dateTime = time.tz(props.timezone).format("DD MMM YYYY HH:mm z");

   const handleBookmark = async()=> {
        
       const response= await makeRequest(UPDATE_EVENT(props.id), {
        data:
        {
            isBookmarked:!bookmarked,
        }
    })
    setBookmarked(!bookmarked);
       console.log(response)
    }
    const navigate = useNavigate();
    const handleClickOnCard = () => {
        navigate(`/event/${props.id}`);
    }

   

    return (
        <div className="card" >
            <div className="card-image" onClick={handleClickOnCard}>
                <img id ="card-img" src={props.imgUrl} alt="event"/>
            </div>
            <div className="card-content">
                <div className="card-title" onClick={handleClickOnCard}>
                    <h3>{props.name}</h3>
                </div>

                <div className="card-description" onClick={handleClickOnCard}>
                    <p>{props.description}</p>
                </div>

                <div className="card-venue" onClick={handleClickOnCard}>VENUE: {props.venue}</div>

                <div className="card-date" onClick={handleClickOnCard}>DATE: {dateTime}</div>
                <div className="card-icons">
                   {!bookmarked? <FontAwesomeIcon onClick={handleBookmark} icon={faBookmark} size="3x" style={{color:"pink"}}/>: <FontAwesomeIcon onClick={handleBookmark}icon={faBookmark2} size="3x" style={{color:"pink"}}/>}

                    {!available?  <div className="register-div"><FontAwesomeIcon icon={faCircleXmark} size="2x" style={{color:"yellow"}}/> <p style={{color:"yellow"}}>NO SEATS AVAILABLE</p></div>: null}

                    {registered?  <div className="register-div"><FontAwesomeIcon icon={faCircleCheck} size="2x" style={{color:"# A0F3AD"}}/> <p>REGISTERED</p></div>: null}
                </div>

            </div>
        </div>
    )
}

export default Card;