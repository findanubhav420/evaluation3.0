import React from "react";
import "./homePage.css";
import Navbar from "../../components/Navbar/navbar.jsx"; 
import Header from "../../components/Header/header.jsx";
import Body from "../../components/Body/body.jsx";


function HomePage() {
    return(
        <>
        <Navbar/>
        <Header/>
        <Body/>
        </>
       
    );
}

export default HomePage;

