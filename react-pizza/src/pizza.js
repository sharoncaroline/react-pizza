import React from "react";

function Pizza({ pizza, onEditPizza }) {
  return (
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? "Yes" : "No"}</td>
      <td>
        <button onClick={() => onEditPizza(pizza)}>Edit</button>
      </td>
    </tr>
  );
}

export default Pizza;