import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crow.svg";
import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
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
          <div
            className="option"
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => auth.signOut()}
          >
            SIGN OUT
            <span style={{ margin: "15px", fontWeight: "bold" }}>
              {currentUser.displayName}
            </span>
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
