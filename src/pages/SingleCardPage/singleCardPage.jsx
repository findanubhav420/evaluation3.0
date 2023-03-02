import {React,useState,useEffect} from "react";
import "./singleCardPage.css";
import Navbar from "../../components/Navbar/navbar.jsx";
import DetailCard from "../../components/DetailCard/detailCard";
import makeRequest from "../../utils/makeRequest";
import {GET_EVENT_BY_ID} from "../../constants/apiEndPoints";
import { useParams } from "react-router-dom";
function SingleCardPage() {

    const {id} = useParams();
    const [data,setData] = useState();
    useEffect(() => {
        makeRequest(GET_EVENT_BY_ID(id))
        .then((res) => {
            setData(res);
        })
    },[id])

   
    return data?(
        <div className="singlecardPage">
       <Navbar/>
       <div className="singlecardPage-card">
       <DetailCard 
       key={data.id}
       id={data.id}
       name={data.name}
       imgUrl={data.imgUrl}
       description={data.description}
       venue={data.venue}
       datetime={data.datetime}
       timezone={data.timezone}
       areSeatsAvailable={data.areSeatsAvailable}
       isRegistered={data.isRegistered}
       isBookmarked={data.isBookmarked}/>
       </div>
        </div>
    ):(
        <div className="body">
            <h1>Loading...</h1>
        </div>
    )
    
}

export default SingleCardPage;