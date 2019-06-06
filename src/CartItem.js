import React from "react";
import { AppContext } from "./AppContext";

import styled from "styled-components";

export default function CartItem({ item, cart, calculateTotal }) {
  const { title, price, img } = item;
  console.log("cart", cart);
  console.log("item", item);

  const count = () => {
    return cart.filter(product => product === item).length;
  };

  const calculatedTotal = () => {
    let arrayOfPrices = cart
      .map(item => item.price)
      .reduce((current, previous) => {
        return current + previous;
      });
    return arrayOfPrices;
  };

  let total = calculatedTotal();
  console.log(total);

  calculateTotal(total);

  return (
    <Row>
      <div className="item">{title}</div>
      <div className="item">{price}</div>
      <img className="item" src={`${img}.jpg`} />
      <CartButtons>
        <div>Quantity : {count()} </div>
        <AppContext.Consumer>
          {data => (
            <div className="buttons">
              <i class="fas fa-plus buttton plus" />
              <i
                class="fas fa-minus button minus"
                onClick={() => data.removeFromCart(item)}
              />
            </div>
          )}
        </AppContext.Consumer>
      </CartButtons>
    </Row>
  );
}

const CartButtons = styled.div`
  width: 150px;
  .buttons {
    margin-top: 0.5rem;
    margin-left: 1rem;
    .button {
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

  img {
    width: 100px;
    height: 100px;
  }
`;
