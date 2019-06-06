import React, { createContext } from "react";
import { sheets } from "./SheetProductData";
import { pillows } from "./PillowProductData";

export const AppContext = createContext();

export default class AppProvider extends React.Component {
  state = {
    cart: [],
    sheets,
    pillows
  };

  addToCart = item => {
    const tempArray = [...this.state.cart];
    tempArray.push(item);
    this.setState({ cart: tempArray });
  };

  removeFromCart = item => {
    console.log("item", item);
    const tempArray = [...this.state.cart];
    tempArray.splice(tempArray.indexOf(item), 1);

    this.setState({ cart: tempArray });
  };

  render() {
    console.log(this.state.cart);
    return (
      <AppContext.Provider
        value={{
          cart: this.state.cart,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
          sheets: this.state.sheets,
          pillows: this.state.pillows
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
