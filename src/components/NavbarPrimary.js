import {
  site_title,
  header_link_text,
  header_link_text_active,
} from "./NavbarPrimary.module.css";

import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import React from "react";
import { useMedia } from "react-use";

const styles = {
  width: "100%",
  height: "90px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const styles_mobile = {
  flexDirection: "column",
  alignItems: "flex-start",
  marginLeft: 0,
};

const styles_nav = {
  display: "flex",
  marginLeft: "auto",
};

const styles_mobile_nav = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "0px",
};

const NavbarPrimary = () => {
  const isWide = useMedia("(min-width: 500px)");

  return (
    <div>
      <Navbar bg="dark" style={isWide ? styles : styles_mobile}>
        <NavLink to="/">
          <Navbar.Brand>
            <h1 className={site_title}>Mykhailo Gogol</h1>
          </Navbar.Brand>
        </NavLink>

        <Nav style={isWide ? styles_nav : styles_mobile_nav}>
          <NavLink
            exact
            to="/"
            className={
              isWide
                ? `${header_link_text} p-3 ml-2 mr-2`
                : `${header_link_text} pt-2 pb-2`
            }
            activeClassName={header_link_text_active}
          >
            <span>React Redux Phonebook</span>
          </NavLink>

          <NavLink
            to="/code_editor"
            className={
              isWide
                ? `${header_link_text} p-3 ml-2 mr-2`
                : `${header_link_text} pt-2 pb-2`
            }
            activeClassName={header_link_text_active}
          >
            <span>TypeScript Code Editor</span>
          </NavLink>

          <NavLink
            to="/firebase_app"
            className={
              isWide
                ? `${header_link_text} p-3 ml-2 mr-2`
                : `${header_link_text} pt-2 pb-2`
            }
            activeClassName={header_link_text_active}
          >
            <span>Firebase Users App</span>
          </NavLink>

          <NavLink
            to="/react_movies"
            className={
              isWide
                ? `${header_link_text} p-3 ml-2 mr-2`
                : `${header_link_text} pt-2 pb-2`
            }
            activeClassName={header_link_text_active}
          >
            <span>React Router Movies</span>
          </NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavbarPrimary;
