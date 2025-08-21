import React, { useState, useEffect } from "react";

function PizzaForm({ selectedPizza, onUpdatePizza }) {
  const [formData, setFormData] = useState({
    topping: "",
    size: "Small",
    vegetarian: true
  });

  useEffect(() => {
    if (selectedPizza) {
      setFormData(selectedPizza);
    }
  }, [selectedPizza]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${formData.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedPizza => onUpdatePizza(updatedPizza));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="topping"
        value={formData.topping}
        onChange={handleChange}
        placeholder="Topping"
      />
      <select name="size" value={formData.size} onChange={handleChange}>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
      </select>
      <label>
        Vegetarian?
        <input
          type="checkbox"
          name="vegetarian"
          checked={formData.vegetarian}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
}

export default PizzaForm;