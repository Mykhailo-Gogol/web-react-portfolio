import React from "react";

import { side_bar, side_bar_button } from "./SideNavbar.module.css";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const AsideNavbar = () => {
  return (
    <div>
      <ButtonGroup
        vertical
        className={`${side_bar} border-right border-primary`}
      >
        <Button className={side_bar_button} variant="light">
          CLI-application
        </Button>
        <Button className={side_bar_button} variant="light">
          goit-react-hw-08-phonebook
        </Button>

        <Button className={side_bar_button} variant="light">
          goit-react-hw-04-movies{" "}
        </Button>
        <Button className={side_bar_button} variant="light">
          goit-react-hw-03-image-finder
        </Button>

        <Button className={side_bar_button} variant="light">
          JavaScriptQuiz
        </Button>
        <Button className={side_bar_button} variant="light">
          goit-js-hw-13-image-finder{" "}
        </Button>

        <Button className={side_bar_button} variant="light">
          goit-js-hw-12-countries{" "}
        </Button>
        <Button className={side_bar_button} variant="light">
          parcel-project-template
        </Button>

        <Button className={side_bar_button} variant="light">
          to-do-list
        </Button>
        <Button className={side_bar_button} variant="light">
          RGB-color-game
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AsideNavbar;
