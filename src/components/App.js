import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList.js";
import Stats from "./Stats.js";

let initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function App() {
  const [data, setData] = useState(initialItems);

  function handleAddItem(item) {
    setData([...data, item]);
  }

  function deleteItem(id) {
    console.log(data.filter((e) => e !== id));
    setData((data) => data.filter((e) => e.id !== id));
  }

  function toggleItem(id) {
    setData((data) =>
      data.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
  }

  function clearList(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setData((data) => (data = []));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackagingList
        items={data}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearList={clearList}
      />
      <Stats items={data} />
    </div>
  );
}

export default App;
