import React from "react";

export default function Column() {
  const food = [
    {
      name: "Fish",
      date: "Tuesday",
      id: 1,
    },
    {
      name: "Turkey",
      date: "Friday",
      id: 2,
    },
    {
      name: "Meat",
      date: "Monday",
      id: 3,
    },
  ];

  const foodlist = food.map((foodie) => (
    <React.Fragment key={foodie.id}>
      {`${foodie.date} I will eat ${foodie.name}`}
    </React.Fragment>
  ));
  return (
    <React.Fragment>
      <td>{foodlist}</td>
    </React.Fragment>
  );
}
