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
import "./detailCard.css";
// import Registered from "../../assets/icons/registered.svg";

function DetailCard(props) {
    const [registered,setRegistered] = useState(props.isRegistered);
    const [bookmarked,setBookmarked] = useState(props.isBookmarked);
    const [available,setAvailable] = useState(props.areSeatsAvailable);

  const time = moment(props.datetime);
  const dateTime = time.tz(props.timezone).format("DD MMM YYYY HH:mm z");

   const handleBookmark = async()=> {
        setBookmarked(!bookmarked);
       const response= await makeRequest(UPDATE_EVENT(props.id), {data:{isBookmarked:bookmarked}})

       console.log(response)
    }
   

    const handleRegisterButton = async()=>{
        setRegistered(!registered);
        const response= await makeRequest(UPDATE_EVENT(props.id), {data:{isRegistered:registered}})
        console.log(response)
    }
   

    return (
        <div className="detailcard" >
            <div className="detailcard-image">
                <img id ="detailcard-img" src={props.imgUrl} alt="event"/>
            </div>
            <div className="detailcard-content">
                <div className="detailcard-title">
                    <h3>{props.name}</h3>
                </div>

                <div className="detailcard-description">
                    <p>{props.description}</p>
                </div>

                <div className="detailcard-venue">VENUE: {props.venue}</div>

                <div className="detailcard-date">DATE: {dateTime}</div>
                <div className="detailcard-icons">
                   {!bookmarked? <FontAwesomeIcon onClick={handleBookmark} icon={faBookmark} size="4x" style={{color:"pink"}}/>: <FontAwesomeIcon onClick={handleBookmark}icon={faBookmark2} size="4x" style={{color:"pink"}}/>}

                   {!available?  <div className="detailregister-div"><FontAwesomeIcon icon={faCircleXmark} size="3x" style={{color:"# ECECAB"}}/> <p>NO SEATS AVAILABLE</p></div>: null}

                    {registered?  <div className="detailregister-div"><FontAwesomeIcon icon={faCircleCheck} size="3x" style={{color:"green"}}/> <p>REGISTERED</p></div>: null}
                </div>

                <div className="detailcard-button">
                    {available?(!registered?<button onClick={handleRegisterButton}>REGISTER</button>:<button onClick={handleRegisterButton}>UNREGISTER</button>):null}
                </div>
            </div>
        </div>
    )
}

export default DetailCard;