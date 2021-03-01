import React from 'react'
import {Container} from 'react-bootstrap'
import Cards from "../components/Dashboard-Cards";
import "../components/dashboard-cards.css"

import mslogo from "../assets/img/microsoft-logo.png";
import fblogo from "../assets/img/facebook-logo.png" ;
import pplogo from "../assets/img/paypal-logo.jpg" ;
import stlogo from "../assets/img/Spotify.png" ;

// import msStd from "./dashboard/student/microsoft"

function Dashboard() {
    return (
        <div className="Dashboard">

            <div className="header">
                <h1>Company Details</h1> 
                <div className="nav">
                    <div className="nav-input">
                        <input type="text" placeholder="Seach By Company-name" /> 
                        <input type="text" placeholder="Skills, Designation, Keywords" />
                        <input type="text" placeholder="Search By Branch" />
                        <button>Search</button>
                    </div>
                </div>
            </div>

            <Container className="card-container">
                <Cards
                imgsrc = {mslogo}
                name = "Microsoft"
                role = "Software Developer"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "microsoft-appliedStudents"
                companyLink = "microsoft"
                />
    
                <Cards
                imgsrc = {fblogo}
                name = "Facebook"
                role = "App Developer"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "facebook-appliedStudents"
                companyLink = "facebook"
                />
    
                <Cards
                imgsrc = {pplogo}
                name = "PayPal"
                role = "Project Manager"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "paypal-appliedStudents"
                companyLink = "paypal"
                />
    
                <Cards
                imgsrc = {stlogo}
                name = "Spotify"
                role = "Wordpress Expert"
                requirment = "CSSS3 , HTML5, Javascript, Bootstrap, Jquery"
                studentLink = "spotify-appliedStudents"
                companyLink = "spotify"
                />
            </Container>
            
            <div className="footer">
                 
            </div>
        </div>
    )
}

export default Dashboard