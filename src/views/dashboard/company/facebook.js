import React from "react"
import "./company-details.css"

function Company() {
    return (
      <div className="Company-detail">
         <h3>Remote Business Development Associate Job at Facebook</h3>

         <div className="container">
            <div className="title Card">
               <p className="subtitle">Business Development Associate</p>
               <small>Facebook</small>

               <div className="requirment">
                  <p>Required CGPA - 8.9</p>
                  <p>CTC - $78 PA</p>
               </div>
               <p>No. of Applient - 136</p>
            </div> 

            <div className="about-company Card">
               <p className="subtitle">About Facebook</p>
               <div className="text">
               Facebook is a social networking website where users can post comments, share photographs, and post links to news or other interesting content    on the web, chat live, and watch short-form video. Shared content can be made publicly accessible, or it can be shared only among a select    group of friends or family, or with a single person.
               </div>
   
               <p className="subtitle">About the Job</p>
               <small>Key responsibilities:</small>
               <div className="text">
               1. Onboard Tripoto travel agents and property partners <br></br>
               2. Learn how to build a sales pipeline and execute sales directives efficiently <br></br>
               3. Deliver sales revenue and accounts growth by learning and executing sales strategy for your segment/pipeline <br></br>
               4. Build your own understanding of best practices for B2B sales and take ownership of your own order book for Tripoto
               </div>
            </div>

            <div className="skill Card">
               <p className="subtitle">Skill(s) Required</p>
               <div className="text">
               <button>HTML5</button>
               <button>Node Js</button>
               <button>Javascripts</button>
               <button>Wordpress</button>
               </div>
               <p>Learn these skills on Internshala Trainings</p>

               <p className="subtitle">Who can Apply</p>
               <div className="text">
               1. A graduate who knows or is really keen on learning about the travel and tourism industry <br></br>
               2. Willing to relocate to metro cities, if required <br></br>
               3. Can speak English and Hindi fluently and other Indian languages are added advantage <br></br>
               4. Ready to take ownership, build credibility, and not afraid to remove your limiters <br></br>
               </div>

               <p className="subtitle"> Perks </p>
               <div className="text"><button>5 days a week</button></div>
            </div>

            <div className="information Card">
            <p className="subtitle">Additional Information</p>
            <div className="text">
            Facebook is user-friendly and open to everyone. Even the least technical-minded people can sign up and begin posting on Facebook. Although it started out as a way to keep in touch or reconnect with long-lost friends, it rapidly became the darling of businesses that were able to closely target an audience and deliver ads directly to the people most likely to want their products or services.

            Facebook makes it simple to share photos, text messages, videos, status posts and feelings on Facebook. The site is entertaining and a regular daily stop for many users.
            <br></br> <br></br>
            Unlike some social network sites, Facebook does not allow adult content. When users transgress and are reported, they are banned from the site.
            
            Facebook provides a customizable set of privacy controls, so users can protect their information from getting to third-party individuals. 
            </div>

            <p className="subtitle">Number of openings</p>
            <div className="text">6</div>

            <button className="btn">Apply Now</button>
            </div>
            

         </div>
      </div>
    )
}

export default Company