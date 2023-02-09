import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { auth } from "../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Login = () => {
  const [verify, setVerify] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInput = (e) => {
    setPhoneNumber("+57" + e.target.value);
  };

  const generateReCaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        },
        auth
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    if (phoneNumber.length >= 10) {
      setVerify(true);
      generateReCaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => console.log(error.message));
    } else if (phoneNumber.length > 10) {
      alert("Phone number is not valid!");
    }
  };

  if (verify)
    return (
      <div className="Login">
        <div className="Login__content">
          <div className="Login__image">
            <img src={Logo} alt="Logo" width="100" />
          </div>
          <h3>Verification</h3>
          <p>Enter the four-digit code from SMS.</p>
          <div className="Login__form">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Verification Code"
                aria-label="Verification Code"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
        </div>
        <div className="Login__footer">
          <div id="sign-in-button" className="Login__button">
            <button type="button">Login</button>
          </div>
        </div>
        <div></div>
      </div>
    );

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
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              aria-label="Phone"
              aria-describedby="basic-addon1"
              onChange={handleInput}
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
