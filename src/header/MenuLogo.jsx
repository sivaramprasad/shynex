import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/home/logo.webp";

export default function MenuLogo() {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        width={"136px"}
        height={"38px"}
      />
    </Link>
  );
}
