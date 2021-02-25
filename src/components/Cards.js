import React from 'react'

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

               <a href={props.studentLink}>
                  <button>Applied Students</button>
               </a>
               <a href={props.companyLink}>
                   <div className="details">
                        <span>Veiw Details</span>
                        <i class="fas fa-chevron-circle-right"></i>
                   </div>
               </a>
            </section>
        </div>
    )
}

export default Card;