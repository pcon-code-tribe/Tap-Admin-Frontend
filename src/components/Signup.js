import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

function Signup() {
  return (
    <div className="SignUp_App">
      <section className="SignUp_container" id="container">
        <section className="SignUp_form-container SignUp_sign-up-container">
          <form action="#">
            <h1 className="SignUp_h1">Create Account</h1>
            <div className="SignUp_social-container">
              <a href="/" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="/" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            <span className="SignUp_span">
              or use your email for registration
            </span>

            <div className="SignUp_form_control">
              <input type="text" placeholder="Name" required></input>
              {/* <label> Name </label> */}
            </div>
            <div className="SignUp_form_control">
              <input type="text" placeholder="Institute Email" required></input>
              {/* <label> Institute Email </label> */}
            </div>
            <div className="SignUp_form_control">
              <input type="text" placeholder=" Password" required></input>
              {/* <label> Password </label> */}
            </div>

            <button className="SignUp_button SignUp_sign">
            <Link to="/admin/dashboard">Sign Up</Link>
            </button>
          </form>
        </section>

        <section className="SignUp_overlay-container SignUp_sign-up-overlay">
          <div className="SignUp_overlay">
            <div className="SignUp_overlay-panel SignUp_overlay-right">
              <h1 className="SignUp_h1">Welcome Back!</h1>
              <p className="SignUp_p">
                To keep connected with us please login with your personal info
              </p>
              <button className="SignUp_button SignUp_ghost" id="signUp">
                <Link to="/">Sign In</Link>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Signup;
