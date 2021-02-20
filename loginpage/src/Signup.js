import React from 'react';
import { Link } from "react-router-dom";
import './App.css'
import './index.css'
import './Animation'


function Singup() {
  return (
    <div className='App'>
      <section className="container" id="container">

        <section class="form-container sign-up-container">
            <form action="#"> 
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="/" class="social"><i class="fab fa-facebook-f"></i></a>
    		    	      <a href="/" class="social"><i class="fab fa-google-plus-g"></i></a>
    		    	      <a href="/" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>

                <span>or use your email for registration</span>

                <div className="form_control">
                  <input type="text" placeholder="Name" required></input>
                  {/* <label> Name </label> */}
                </div>
                <div className="form_control">
                  <input type="text" placeholder="Institute Email" required></input>
                  {/* <label> Institute Email </label> */}
                </div>
                <div className="form_control">
                  <input type="text" placeholder=" Password" required></input>
                  {/* <label> Password </label> */}
                </div>

                <button className="sign">Sign Up</button>
            </form>
        </section>

        <section className="overlay-container sign-up-overlay">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
    	  		<h1>Welcome Back!</h1>
    	  		<p>To keep connected with us please login with your personal info</p>
    	  		<button className="ghost" id="signUp"><Link to="/">Sing In</Link></button>
            </div>
          </div>
        </section>

        
      </section>
    </div>

  );
}

export default Singup;