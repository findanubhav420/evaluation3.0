import {React, useEffect, useState} from "react";
import "./body.css";
import makeRequest from "../../utils/makeRequest";
import {GET_ALL_EVENTS} from "../../constants/apiEndPoints.js";

import Card from "../../components/Card/card.jsx";

function Body() {

    const [data,setData] = useState();
    useEffect(() => {
        makeRequest(GET_ALL_EVENTS)
        .then((res) => {
            setData(res);
        })  
    },[])
  return data?(
        <div className="body">
            {data.map((event) => {
                return <Card
                key={event.id}
                id={event.id}
                name={event.name}
                imgUrl={event.imgUrl}
                description={event.description}
                venue={event.venue}
                datetime={event.datetime}
                timezone={event.timezone}
                areSeatsAvailable={event.areSeatsAvailable}
                isRegistered={event.isRegistered}
                isBookmarked={event.isBookmarked}
                />
            })}
        </div>
    ):(
        <div className="body">
            <h1>Loading...</h1>
        </div>
    )
}

export default Body;