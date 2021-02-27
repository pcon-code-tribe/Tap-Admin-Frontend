import React from "react"
import "../student-card.css"
import Card from "../Student-card"
import img from "../img/img1.jpg"

function Student() {
    return (
        <div className="Applied-student">
            <div className="header">
                <div className="searchbar">
                    <input type="text" placeholder="Seach By Name" /> 
                    <input type="text" placeholder="Skills, Designation, Keywords" />
                    <input type="text" placeholder="Search By Branch" />
                    <button>Search</button>
                </div>
            </div>

            <div className="title">
               <p>Our Experts</p>
               <h1>All Applied <span>Student</span></h1>
            </div>

            <section className="card-container">
                <Card
                imgsrc = {img}
                name = "Nivedita Singh"
                domain= "Software Developer"
                branch="CSE"
                cgpa="8.7"
                tags = {["HTML", "CSS3", "Php", "Android", "Node"]}
                studentLink = "/pdf"
                />
    
                <Card
                imgsrc = {img}
                name = "Aditi Srivastava"
                domain= "Software Developer"
                branch="EEE"
                cgpa="9.0"
                tags = {["HTML", "CSS3", "Php", "Android", "Node"]}
                studentLink = "/pdf"
                />
    
                <Card
                imgsrc = {img}
                name = "Namita Goyal"
                domain= "Software Developer"
                branch="CSE"
                cgpa="8.2"
                tags = {["HTML", "CSS3", "Php", "Android", "Node"]}
                studentLink ="/pdf"
                />
    
                <Card
                imgsrc = {img}
                name = "Aadyanat Mishra"
                domain= "Software Developer"
                branch="ECE"
                cgpa="9.2"
                tags ={["HTML", "CSS3", "Php", "Android", "Node"]}
                studentLink = "/pdf"
                />
            </section>
            
            <div className="footer">
                 
            </div>
        </div>
    )
}

export default Student