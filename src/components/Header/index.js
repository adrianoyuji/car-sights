import React from "react";
import LogoImage from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={LogoImage} alt="logo.png" />
      </div>
    </div>
  );
}
