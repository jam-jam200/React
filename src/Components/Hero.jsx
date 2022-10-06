import React from "react";

export default function Hero({ heroname }) {
  if (heroname === "Joker") {
    throw new Error("Joker is not a hero");
  }
  return <div>{heroname}</div>;
}
