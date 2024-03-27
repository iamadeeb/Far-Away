import { useState } from "react";
import Item from "./Item";

export default function PackagingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems = [];
  if (sort === "input") sortedItems = items;

  if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function onChange(data) {
    setSort((e) => data.target.value);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((e) => (
          <Item
            item={e}
            key={e.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sort} onChange={onChange}>
          <option value="input"> Sort by input order </option>
          <option value="description"> Sort by description order </option>
          <option value="packed"> Sort by packed order </option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
