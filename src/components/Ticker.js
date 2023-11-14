//Implements the first feature of generating a random price each second

import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");
  //create the ref and set its initial value
  const prevPriceRef = useRef(price)

  useEffect(() => {
    //every 1s, generate a new random price
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    //use the current value of the ref
    const prevPrice = prevPriceRef.current
    if (price > prevPrice) {
      setColor("green")
    } else if (price < prevPrice) {
      setColor("red")
    } else {
      setColor("black")
    }
    //set the new value of the ref
    prevPriceRef.current = price
  }, [price])

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
