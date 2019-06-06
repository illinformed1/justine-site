import React from "react";
import styled from "styled-components";
import { sheets } from "./SheetProductData";
import SheetProduct from "./SheetProduct";

export default function Sheets() {
  return (
    <div>
      <Wrapper>
        <div className="content">
          <div className="wrapper">
            {sheets.map(item => (
              <SheetProduct item={item} />
            ))}
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
