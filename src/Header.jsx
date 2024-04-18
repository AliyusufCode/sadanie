import React from "react";
import { Link } from "react-router-dom";

const Header = ({ click }) => {
  return (
    <div className="header">
      <h2 className="content">OneAI</h2>
      {!click && (
        <div className="Signin">
          <Link
            to={"/log-in"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h2 className="infoSignin">Sign In</h2>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
