import {React, useState} from "react";
import moment from "moment-timezone";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as  faBookmark2} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { UPDATE_EVENT } from "../../constants/apiEndPoints";
import makeRequest from "../../utils/makeRequest";
import { useNavigate } from 'react-router-dom';
import "./card.css";
// import Registered from "../../assets/icons/registered.svg";

function Card(props) {
    const [registered,setRegistered] = useState(props.isRegistered);
    const [bookmarked,setBookmarked] = useState(props.isBookmarked);

  const time = moment(props.datetime);
  const dateTime = time.tz(props.timezone).format("DD MMM YYYY HH:mm z");

   const handleBookmark = async()=> {
        setBookmarked(!bookmarked);
       const response= await makeRequest(UPDATE_EVENT(props.id), {isBookmarked:bookmarked})

       console.log(response)
    }
    const navigate = useNavigate();
    const handleClickOnCard = () => {
        navigate(`/event/${props.id}`);
    }

   

    return (
        <div className="card" onClick={handleClickOnCard}>
            <div className="card-image">
                <img id ="card-img" src={props.imgUrl} alt="event"/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.name}</h3>
                </div>

                <div className="card-description">
                    <p>{props.description}</p>
                </div>

                <div className="card-venue">VENUE: {props.venue}</div>

                <div className="card-date">DATE: {dateTime}</div>
                <div className="card-icons">
                   {!bookmarked? <FontAwesomeIcon onClick={handleBookmark} icon={faBookmark} size="4x" style={{color:"pink"}}/>: <FontAwesomeIcon onClick={handleBookmark}icon={faBookmark2} size="4x" style={{color:"pink"}}/>}

                    {!registered?  <div className="register-div"><FontAwesomeIcon icon={faCircleCheck} size="3x" style={{color:"green"}}/> <p>REGISTERED</p></div>: null}
                </div>

            </div>
        </div>
    )
}

export default Card;