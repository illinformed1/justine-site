import React, { useContext, createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  __RouterContext
} from "react-router-dom";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";
import Sheets from "./Sheets";
import Pillows from "./Pillows";
import Cart from "./Cart";
import SingleItem from "./singleItem";

function useRouter() {
  return useContext(__RouterContext);
}

const Main = () => {
  const { location } = useRouter();

  const transitions = useTransition(location, location => location.key, {
    from: {
      opacity: 0,
      position: "absolute",
      width: "100%",
      transform: "translate3d(100%, 0, 0)"
    },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-50%, 0, 0)" }
  });

  return transitions.map(({ item, props: transition, key }) => (
    <animated.div key={key} style={transition}>
      <Switch location={item}>
        <Route exact path="/" component={Sheets} />
        <Route exact path="/Pillows" component={Pillows} />
        <Route exact path="/Cart" component={Cart} />
        <Route
          exact
          path={`/SingleItem/:id/:category`}
          component={SingleItem}
        />
      </Switch>
    </animated.div>
  ));
};

const Home = () => {
  return (
    <TextAndPic>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        officiis rem incidunt explicabo minus ad quisquam. Minus, ex fugiat nemo
        at velit hic quo mollitia accusantium. Adipisci voluptate consectetur
        veritatis distinctio eaque, sequi tenetur quaerat quis omnis ipsam
        perspiciatis nulla? Iusto quia repellendus alias molestias commodi in
        aut aspernatur dolor.
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
  );
};

const StyleJoinNow = styled.div`
  width: 95vw;
  height: 8rem;
  background: lightblue;
  color: white;
`;

const StyleContact = styled.div`
  width: 5rem;
  height: 5rem;
  background: green;
  color: white;
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

export default Main;
