import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Routes, { NavLink } from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

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
      <Routes navigation={navigation} />
      <HeadingWrapper>
        <span>
          <i className="fab fa-instagram" />
        </span>
        <span>
          <i className="fas fa-cart-plus" />
        </span>
        <span>
          <i className="fas fa-box-open" />
        </span>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Fitted</h1>
          <div style={{ display: "flex" }}>
            <Router>
              {navigation.map(({ title, id, path }) => {
                return (
                  <NavLink
                    to={`${path}`}
                    className="nav-item"
                    style={{ margin: "1rem" }}
                  >
                    {title}
                  </NavLink>
                );
              })}
            </Router>
          </div>
        </div>
      </HeadingWrapper>
      <TextAndPic>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          officiis rem incidunt explicabo minus ad quisquam. Minus, ex fugiat
          nemo at velit hic quo mollitia accusantium. Adipisci voluptate
          consectetur veritatis distinctio eaque, sequi tenetur quaerat quis
          omnis ipsam perspiciatis nulla? Iusto quia repellendus alias molestias
          commodi in aut aspernatur dolor.
        </p>
        {/*   <img
          style={{
            width: "500px",
            height: "500px",
            flexShrink: 0,
            margin: "2rem"
          }}
          src={`/img/${imgCounter}.jpg`}
        /> */}
      </TextAndPic>
    </div>
  );
}

const HeadingWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css?family=East+Sea+Dokdo&display=swap");
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fed19c;

  font-size: 3rem;
  background: white;
  width: 100%;
  height: 20rem;
  font-family: "East Sea Dokdo", cursive;
  /*font-family: "Pacifico", cursive;*/

  .nav-item {
    color: #f5a4ab;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom: 3px solid black;
    }
  }
`;

const TextAndPic = styled.div`
  display: flex;
  margin-top: 3rem;
  padding: 1rem;
  background: linear-gradient(#f7c289 0%, #f5a4ab 50%, #faa896 100%);
  box-shadow: 10px -10px 2px 4px #f9f9f9;
  color: black;

  .text {
    background: white;

    font-family: "Pacifico", cursive;
  }
`;

export default App;
