import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Routes from "./Routes";
import AppProvider, { AppContext } from "./AppContext";
import { Link, BrowserRouter as Router } from "react-router-dom";

const navigation = [
  { title: "Sheet", id: 1, path: "/sheets" },
  { title: "Pillows", id: 2, path: "/pillows" },
  { title: "Inspiration", id: 3, path: "/inspiration" },
  { title: "cart", id: 4, path: "/cart" },
  { title: "Fitted", id: 5, path: "/fitted" }
];

function App() {
  /*const [imgCounter, incCounter] = useState(1);
  if (imgCounter <= 3) {
    setInterval(function() {
      incCounter(imgCounter + 1);
    }, 7000);
  } else {
    incCounter(imgCounter - (imgCounter + 1));
  }*/

  return (
    <div className="App">
      <HeadingWrapper>
        <Icons>
          <span>
            <a href="http://www.instagram.com">
              <img src={"/img/instagram-icon.jpeg"} className="instagram" />
            </a>
          </span>
        </Icons>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Fitted</h1>
          <div style={{ display: "flex" }} />
        </div>
      </HeadingWrapper>
      <AppProvider>
        <Routes />
      </AppProvider>
    </div>
  );
}

const Icons = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  font-size: 2rem;
  margin-left: 1rem;
  .icon {
    margin: 1rem;
  }

  .instagram {
    position: relative;
    margin-right: 0.5rem;
    top: 4px;
    width: 2rem;
    height: 2rem;
  }

  .cart {
    color: #9997fa;
  }
  .box {
    color: #f44242;
  }
`;

export const HeadingWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=East+Sea+Dokdo&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fed19c;

  font-size: 4rem;
  background: white;
  width: 100%;
  height: 20rem;
  font-family: "East Sea Dokdo", cursive;
  /*font-family: "Pacifico", cursive;*/
`;

export default App;
