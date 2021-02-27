import React from "react";
import { Link } from "react-router-dom";
// import Icon from '@material-ui/core/Icon';
import "./signin.css";

function Signin() {
  return (
    <div className="SignIn_App">
      <section className="SignIn_container" id="container">
        <section className="SignIn_overlay-container SignIn_sign-in-overlay">
          <div className="SignIn_overlay">
            <div className="SignIn_overlay-panel SignIn_overlay-right">
              <h1 className="SignIn_h1">Hello !</h1>
              <p className="SignIn_p">
                Enter your personal details and start journey with us
              </p>
              <button className="SignIn_button SignIn_ghost " id="signUp">
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="SignIn_form-container SignIn_sign-in-container">
          <form action="#">
            <h1 className="SignIn_h1">Sign in</h1>
            <div className="SignIn_social-container">
              <Link to="/" className="social">
                <i className="fab fa-facebook-f" />{" "}
              </Link>

              <Link to="/" className="social">
                <i className="fab fa-google-plus-g" />
              </Link>
              <Link to="/" className="social">
                <i className="fab fa-linkedin-in" />{" "}
              </Link>
            </div>

            <span className="SignIn_span">or use your account</span>

            <div className="SignIn_form_control">
              <input type="text" placeholder="Institute Email" required></input>
              {/* <label> Institute Email </label> */}
            </div>
            <div className="SignIn_form_control">
              <input type="text" placeholder="Password" required></input>
              {/* <label> Password </label> */}
            </div>

            <Link to="/"> Forget your Password </Link>
            <button className="SignIn_button SignIn_sign">
              <Link to="/admin/dashboard">Sign In</Link>
            </button>
          </form>
        </section>
      </section>
    </div>
  );
}

export default Signin;
