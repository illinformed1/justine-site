import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import Main from "./Main";
import { HeadingWrapper } from "./App.js";
import { AppContext } from "./AppContext";

function useRouter() {
  return useContext(__RouterContext);
}

export const Routes = props => {
  return (
    <React.Fragment>
      <AppContext.Consumer>{data => console.log(data)}</AppContext.Consumer>

      <Router>
        <Nav className="router-nav">
          <NavLink to="/">Sheets</NavLink>
          <NavLink to="/Pillows">Pillows</NavLink>
          <NavLink to="/Cart">Cart</NavLink>
        </Nav>
        <Main />
      </Router>
    </React.Fragment>
  );
};

function NavLink(props) {
  return (
    <NavItem>
      <Link style={{ textDecoration: "none", color: "#f5a4ab" }} {...props} />
    </NavItem>
  );
}

const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-family: "East Sea Dokdo", cursive;
`;

const NavItem = styled.li`
  list-style: none;
  color: #f5a4ab;
  border-bottom: 3px solid transparent;
  &:hover {
    border-bottom: 3px solid black;
  }
`;

const StyleHome = styled.div`
  width: 80vw;
  height: 40vw;
  background: orange;
  color: white;
`;

export default Routes;
