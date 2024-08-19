import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

export default function MenuLogo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Backstage Pass"
        className="logo"
        width={"136px"}
        height={"38px"}
      />
    </Link>
  );
}
