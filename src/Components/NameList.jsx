import React from "react";
import Person from "./Person";

export default function NameList() {
  const names = ["Shirley", "Liverpool", "Buttercups", "Watermelon"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 20,
      skill: "React",
    },
    {
      id: 2,
      name: "Faith",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 40,
      skill: "Nextjs",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}
