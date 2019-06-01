import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

const navigation = [
  "Sheets",
  "Pillows",
  "Inspiration",
  "Shopping Cart",
  "Fitted"
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Fitted</h1>
          <div style={{ display: "flex" }}>
            {navigation.map(item => (
              <span className="nav-item" style={{ margin: "1rem" }}>
                {item}
              </span>
            ))}
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
        {/* <img
          style={{ width: "500px", height: "500px", flexShrink: 0 }}
       src={`/img/${imgCounter}.jpg`} */}
        />
      </TextAndPic>
    </div>
  );
}

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gold;
  font-size: 3rem;
  background: #f9f9f9;
  width: 100%;
  height: 20rem;
  font-family: "Pacifico", cursive;
`;

const TextAndPic = styled.div`
  display: flex;
  margin: 4rem;
  padding: 2rem;
  background: #632043;
  color: black;

  .text {
    background: white;
    margin: 0 2rem 0 0.5rem;
    font-family: "Pacifico", cursive;
  }
`;

export default App;
