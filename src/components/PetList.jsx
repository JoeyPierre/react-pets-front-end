import React from "react";

function PetList({ pets }) {
  return (
    <div>
      {pets.length ? (
        <ul>
          {pets.map((pet) => (
            <li>{pet.name}</li>
          ))}
        </ul>
      ) : (
        <h1>No pets!</h1>
      )}
    </div>
  );
}

export default PetList;