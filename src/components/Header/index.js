import React from "react";
import LogoImage from "../../assets/logo.png";
import Icon from "@mdi/react";
import { mdiGithub, mdiLinkedin } from "@mdi/js";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={LogoImage} alt="logo.png" />
      </div>
      <div className="links">
        <a
          href="https://github.com/adrianoyuji/sato-real-estate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiGithub} color="black" />
        </a>
        <a
          href="https://www.linkedin.com/in/adriano-yuji-sato-de-vasconcelos-034b09191/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon path={mdiLinkedin} color="0072b1" />
        </a>
      </div>
    </div>
  );
}
