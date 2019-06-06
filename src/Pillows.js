import React from "react";
import styled from "styled-components";
import PillowProduct from "./PillowProduct";
import { AppContext } from "./AppContext";
import { pillows } from "./PillowProductData";

export default function Pillows() {
  return (
    <div>
      <Wrapper>
        <div className="content">
          <div className="wrapper">
            {pillows.map(item => {
              return <PillowProduct item={item} />;
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  padding: 1rem;
  box-shadow: 10px -10px 2px 4px #f9f9f9;
  color: black;

  .text {
    background: white;

    font-family: "Pacifico", cursive;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
  }
`;
