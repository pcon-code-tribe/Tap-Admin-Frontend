import React from 'react'
import {Container} from 'react-bootstrap'
import Cards from "../components/Cards";
import "../components/cards.css"
import mslogo from "../assets/img/microsoft-logo.png";
import fblogo from "../assets/img/facebook-logo.png" ;
import pplogo from "../assets/img/paypal-logo.jpg" ;
import stlogo from "../assets/img/Spotify.png" ;

function Dashboard() {
    return (
        <div className="Dashboard">
            <div className="header">
               <h1>Company Details</h1> 
            </div>

            <div className="nav">
                <input type="text" placeholder="Seach By Company-name" /> 
                <input type="text" placeholder="Skills, Designation, Keywords" />
                <input type="text" placeholder="Search By Branch" />
                <button>Search</button>
            </div>

            <Container className="card-container">
                <Cards
                imgsrc = {mslogo}
                name = "Microsoft"
                role = "Software Developer"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "./dashboard/appliedstudents"
                // companyLink = "./dashboard/companydetails"
                />
    
                <Cards
                imgsrc = {fblogo}
                name = "Facebook"
                role = "App Developer"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "./dashboard/appliedstudents"
                // companyLink = "./dashboard/companydetails"
                />
    
                <Cards
                imgsrc = {pplogo}
                name = "PayPal"
                role = "Project Manager"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "./dashboard/appliedstudents"
                // companyLink = "./dashboard/companydetails"
                />
    
                <Cards
                imgsrc = {stlogo}
                name = "Spotify"
                role = "Wordpress Expert"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "./dashboard/appliedstudents"
                // companyLink = "./dashboard/companydetails"
                />
            </Container>
        </div>
    )
}

export default Dashboard
