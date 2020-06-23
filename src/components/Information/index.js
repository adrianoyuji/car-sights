import React from "react";
import Icon from "@mdi/react";
import { mdiClose } from "@mdi/js";

export default function Information({ onClose }) {
  return (
    <div className="informationContainer">
      <div className="informationHeader">
        <h2>Information</h2>
        <div className="closeIcon" onClick={onClose}>
          <Icon path={mdiClose} />
        </div>
      </div>
      <p>
        The main goal of this project was to learn google maps and practice my
        Frontend Skills.
      </p>
      <p>
        Aside from HTML, CSS and Javascript this website was developed using
        ReactJS, SASS and a few npm packages.
      </p>
      <p>
        If you want to check more projects and know more about me check out my{" "}
        <a
          href="https://adrianoyuji.onrender.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web portfolio
        </a>
        !
      </p>
      <p>Made with ❤ by Adriano Vasconcelos</p>
    </div>
  );
}
