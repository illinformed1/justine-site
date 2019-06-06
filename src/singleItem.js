import React from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";

export default function singleItem({ match }) {
  return (
    <div>
      <AppContext.Consumer>
        {data => {
          console.log(data);
          console.log(match.params.id);

          if (match.params.category === "sheet") {
            const current = data.sheets.filter(
              item => item.id == match.params.id
            );
            return current.map(item => {
              const { title, price, img, inStock, threadcount } = item;
              return (
                <GradientBorder>
                  <ProductCard>
                    <img src={`${img}.jpg`} />
                  </ProductCard>
                  <DescriptionCard>
                    <div className="title">{title}</div>
                    <div className="card-bottom">
                      <div className="card-bottom-left">
                        <div className="card-cat">Price: {price}</div>
                        <div className="card-cat">Threads: {threadcount}</div>
                      </div>

                      <div className="card-bottom-right">
                        <div className="card-cat">
                          inStock: {inStock && "Yes"}
                        </div>
                        <div className="card-cat">
                          <span onClick={() => data.addToCart(item)}>
                            <i class="fas fa-cart-plus cart" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </DescriptionCard>
                </GradientBorder>
              );
            });
          } else {
            if (match.params.category === "pillow") {
              const current = data.pillows.filter(
                item => item.id == match.params.id
              );
              return current.map(item => {
                const { title, price, img, inStock, threadcount } = item;
                return (
                  <GradientBorder>
                    <ProductCard>
                      <img src={`${img}.jpg`} />
                    </ProductCard>
                    <DescriptionCard>
                      <div className="title">{title}</div>
                      <div className="card-bottom">
                        <div className="card-bottom-left">
                          <div className="card-cat">Price: {price}</div>
                          <div className="card-cat">Threads: {threadcount}</div>
                        </div>

                        <div className="card-bottom-right">
                          <div className="card-cat">
                            inStock: {inStock && "Yes"}
                          </div>
                          <div className="card-cat">
                            <span onClick={() => data.addToCart(item)}>
                              <i class="fas fa-cart-plus cart" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </DescriptionCard>
                  </GradientBorder>
                );
              });
            }
          }
        }}
      </AppContext.Consumer>
    </div>
  );
}

const ProductCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  flex-direction: column;
  background: #f9f1f1;
  height: 30rem;
  box-shadow: inset 0 0 10px #000000;

  img {
    height: 100%;
    width: 100%;
  }
`;

const GradientBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem;
  height: 30rem;
  background: linear-gradient(#f7c289 0%, #f5a4ab 50%, #faa896 100%);
`;

const DescriptionCard = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Pacifico|Ranga&display=swap");
  font-family: "Pacifico", cursive;
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  flex-direction: column;
  background: #f9f1f1;
  height: 30rem;
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
`;
