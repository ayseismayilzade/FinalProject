import React from "react";
import MyComponent from "../components/MyComponent";
import Marquee from "react-fast-marquee";

const slider2 = () => (
  <Marquee>
    <MyComponent />
    <MyComponent />
    <MyComponent />
  </Marquee>
);

export default slider2;