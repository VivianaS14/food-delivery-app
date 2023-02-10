import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.png";
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { GeoPoint } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addUser } from "../features/user/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  }, []);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          addUser({
            correo: result.user.email,
            nombre: result.user.displayName,
            photo: result.user.photoURL,
            direccion: new GeoPoint(lat, lng),
            celular: "",
          })
        );
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="Login">
      <div className="Login__content">
        <div className="Login__image">
          <img src={Logo} alt="Logo" width="100" />
        </div>
        <h3>Sing in</h3>
        <p>
          Login or create an account with your Google Account to start ordering
        </p>
      </div>
      <div className="Login__footer">
        <div className="footer__text">
          <p>By clicking the button next you accept.</p>
          <span>Terms of use</span>
        </div>
        <div className="Login__button">
          <button type="button" onClick={handleLogin}>
            <FcGoogle size="1.5rem" />
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
