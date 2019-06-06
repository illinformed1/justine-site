import React, { useState } from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { AppContext } from "./AppContext";
import _ from "lodash";

export default function Cart() {
  let [total, updateTotal] = useState(0);

  const calculateTotal = price => updateTotal(price);

  console.log(total);

  return (
    <React.Fragment>
      <Wrapper>
        <Row>
          <div className="item">Item</div>
          <div className="item">Price</div>
          <div className="item img">Image</div>
          <div className="item" />
        </Row>
        <AppContext.Consumer>
          {data => {
            let unique = _.uniqWith(data.cart, _.isEqual);
            console.log(unique);
            return unique.map(item => {
              return (
                <CartItem
                  item={item}
                  cart={data.cart}
                  calculateTotal={calculateTotal}
                />
              );
            });
          }}
        </AppContext.Consumer>
      </Wrapper>
      <Total>
        <div className="spacer" />
        <div className="column">
          <p className="total-text">Total</p>
          <div className="item">{total}</div>
        </div>
      </Total>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  padding: 1rem;
  box-shadow: 10px -10px 2px 4px #f9f9f9;
  color: black;

  .row {
    display: flex;
    margin: 3rem;
  }
`;

const Total = styled.div`
  .spacer {
    flex-grow: 1;
  }
  margin-right: 6rem;
  display: flex;

  .column {
    justify-content: center;
    align-items: center;

    display: flex;
    flex-direction: column;

    .total-text {
      margin: 1rem;
    }
  }
`;

const Row = styled.div`
  display: flex;
  width: 70vw;
  justify-content: space-between;
  align-items: center;

  .item {
    width: 150px;
  }
`;
