export default function Stats({ items }) {
  const numberOfItems = items.length;
  const numberOfPackedItems = items.filter((e) => e.packed).length;

  return (
    <footer className="stats">
      <em>
        {numberOfItems === 0
          ? "Start adding some items to your packing list 🚀"
          : numberOfItems !== numberOfPackedItems
          ? `You have ${numberOfItems}
          items on your list and you already packed ${numberOfPackedItems} (%
          ${Math.round((numberOfPackedItems / numberOfItems) * 100)})`
          : "You are ready to go! ✈️"}
      </em>
    </footer>
  );
}
