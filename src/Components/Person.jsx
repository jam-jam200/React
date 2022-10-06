import React from "react";

function Person({person, key}) {
  return (
    <div>
      <h2 key={person.id}>{`My name is ${person.name}. I am ${person.age}, my skill is ${person.skill}`}</h2>
    </div>
  );
}

export default Person;
