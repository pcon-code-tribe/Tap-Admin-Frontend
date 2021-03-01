import React from 'react';
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className="Cards">
            <section className="card">
               <h1>
                  <img src={props.imgsrc}/>
                  <span>{props.name}</span>
               </h1> 

               <small>{props.role}</small>
               <p>{props.requirment}</p>

                <Link to={`/admin/try-dashboard/${props.studentLink}`}>
                    <button>Applied Students</button>
                </Link>
                <Link to={`/admin/try-dashboard/${props.companyLink}`}>
                   <div className="details">
                        <span>View Details</span>
                        <i className="fas fa-chevron-circle-right ml-2"></i>
                   </div>
               </Link>
            </section>
        </div>
    )
}

export default Card;