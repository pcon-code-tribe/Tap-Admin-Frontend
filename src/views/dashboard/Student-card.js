import React from 'react'

function Card(props) {
    return (
        <div className="Cards">
            <section className="card">
                <h2>
                   <img src={props.imgsrc}/>
                   <span>{props.name}</span>
                </h2> 
                <small>{props.domain}</small>
 
                <div className="details">
                   <p className="branch desc">{props.branch}</p>
                   <p className="cgpa desc">{props.cgpa}</p>
                </div>

                <div className="tags">
                    <button>{props.tags[0]}</button>
                    <button>{props.tags[1]}</button>
                    <button>{props.tags[2]}</button>
                    <button>{props.tags[3]}</button>
                </div>

                <div className="description">
                  At Vero Eos Et Accusamus Et Iusto Odio Dignissimos Ducimus Qui.
                </div>
 
                <a href={props.studentLink}>
                   <button className="Cv">Download CV</button>
                </a>
            </section>
        </div>
    )
}

export default Card;