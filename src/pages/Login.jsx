import React from "react";
import Logo from "../assets/images/Logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";

const Login = () => {
  return (
    <div className="Login">
      <div className="Login__content">
        <div className="Login__image">
          <img src={Logo} alt="Logo" width="100" />
        </div>
        <h3>Sing in</h3>
        <p>
          Login or create an account with your phone number to start ordering
        </p>
        <div className="Login__form">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <BsFillTelephoneFill />
            </span>
            <span className="input-group-text" id="basic-addon2">
              + 57
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              aria-label="Phone"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <div className="Login__footer">
        <div className="footer__text">
          <p>By clicking the button next you accept.</p>
          <span>Terms of use</span>
        </div>
        <div className="Login__button">
          <button type="button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
