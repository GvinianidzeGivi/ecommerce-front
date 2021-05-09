import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crow.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {currentUser ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              className="option"
              style={{ display: "flex" }}
              onClick={() => auth.signOut()}
            >
              SIGN OUT
            </div>
            {currentUser.displayName}
            <img
              style={{ width: "50px", borderRadius: "50%", margin: "0px 20px" }}
              src={currentUser.photoURL}
            />
          </div>
        ) : (
          <Link className="option" to="/auth">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
