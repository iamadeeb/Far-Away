import { useState } from "react";

export default function Form({ onAddItems }) {
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (desc === "") return;
    const newItem = {
      description: desc,
      quantity: quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDesc("");
    setQuantity("");
  }

  function handleTextChange(e) {
    e.preventDefault();
    setDesc(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(Number(e.target.value));
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> What do you need for your trip?</h3>
      <select onChange={handleQuantityChange} value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={desc}
        onChange={handleTextChange}
      />
      <button>Add</button>
    </form>
  );
}
