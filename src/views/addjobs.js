import React from 'react'
import "./addjobs.css"

function addjobs() {
    return (
        <div className="Addjobs">
            <form>
               <h1 className="title">ADD DETAILS</h1>
               <input type="text" placeholder="Company Name" />
               <input type="text" placeholder="Required Role" />
               <input type="text" placeholder="CGPA" />
               <input type="text" placeholder="Required Branches" />
               <input type="text" placeholder="Deadline" />
               <input type="text" placeholder="Comapany PDF link" />

               <button>Submit Form</button>
            </form>
        </div>
    )
}

export default addjobs;
