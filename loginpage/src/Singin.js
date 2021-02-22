import React from 'react';
import { Link } from "react-router-dom";
import Icon from '@material-ui/core/Icon';
import './App.css'
import './index.css'
import "./Animation"

function Singin() {
  return (
    <div className='App'>
      <section className="container" id="container">

        <section className="overlay-container sign-in-overlay">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
    	  			<h1>Hello !</h1>
    	  			<p>Enter your personal details and start journey with us</p>
    	  			<button className="ghost" id="signUp"><Link to="/singup">Sing Up</Link></button>
            </div>
          </div>
        </section>

        <section class="form-container sign-in-container">
          <form action="#"> 
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="/" class="social"><i className="fab fa-facebook-f" />   </Link>
    				  <Link to="/" class="social"><i className="fab fa-google-plus-g" /></Link>
    				  <Link to="/" class="social"><i className="fab fa-linkedin-in" />  </Link>
            </div>

            <span>or use your account</span>

            <div className="form_control">
              <input type="text" placeholder="Institute Email" required></input>
              {/* <label> Institute Email </label> */}
            </div>
            <div className="form_control">
              <input type="text" placeholder="Password" required></input>
              {/* <label> Password </label> */}
            </div>

            <Link to="/"> Forget your Password </Link>
            <button className="sign">Sign In</button>
          </form>
        </section>

      </section>
    </div>

  );
}

export default Singin;
