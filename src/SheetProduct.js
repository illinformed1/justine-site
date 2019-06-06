import React from "react";
import styled from "styled-components";
import { AppContext } from "./AppContext";
import { Link } from "react-router-dom";

export default function SheetProduct({ item }) {
  const { id, title, price, threadcount, inStock, inCart, img } = item;

  return (
    <React.Fragment>
      <AppContext.Consumer>
        {data => (
          <GradientBorder>
            <ProductCard>
              <Link to={`SingleItem/${id}/sheet`}>
                <div className="title">{title}</div>
                <img src={`${img}.jpg`} />
              </Link>
              <div className="card-bottom">
                <div className="card-bottom-left">
                  <div className="card-cat">Price: {price}</div>
                  <div className="card-cat">Threads: {threadcount}</div>
                </div>

                <div className="card-bottom-right">
                  <div className="card-cat">inStock: {inStock && "Yes"}</div>
                  <div className="card-cat">
                    <span onClick={() => data.addToCart(item)}>
                      <i class="fas fa-cart-plus cart" />
                    </span>
                  </div>
                </div>
              </div>
            </ProductCard>
          </GradientBorder>
        )}
      </AppContext.Consumer>
    </React.Fragment>
  );
}

const GradientBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 3rem;
  width: 20rem;
  height: 22rem;
  background: linear-gradient(#f7c289 0%, #f5a4ab 50%, #faa896 100%);
`;

const ProductCard = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Pacifico|Ranga&display=swap");
  font-family: "Pacifico", cursive;
  width: 20rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  flex-direction: column;
  background: #f9f1f1;
  height: 22rem;
  box-shadow: inset 0 0 10px #000000;

  .title {
    font-weight: normal;
    color: #ff0055;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-size: 1.7rem;
  }

  .card-bottom {
    font-family: "Ranga", cursive;
    display: flex;
    width: 100%;
    justify-content: space-around;
    font-size: 1.5rem;

    .cart {
      color: #9999ff;
      font-size: 1.5rem;
    }

    .card-cat {
      margin: 1rem;
    }
  }

  img {
    height: 10rem;
    width: 13rem;
  }
`;
