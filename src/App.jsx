import { useEffect, useState } from "react";
import ClearCompleted from "./components/ClearCompleted";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
const App = () => {
  const [mainItems, setMainItems] = useState(() => {
    // Retrieve saved items from localStorage on initial render
    const savedItems = JSON.parse(localStorage.getItem("groceryList"));
    return savedItems || [];
  });

  const toggleItem = (id) => {
    const theToggled = (prevItems) =>
      prevItems.map((item) => {
        return item.id === id ? { ...item, completed: !item.completed } : item;
      });
    setMainItems(theToggled);
  };

  const deleteItem = (id) => {
    if (confirm("Are you sure?")) {
      const undeleted = (prevItem) =>
        prevItem.filter((item) => {
          return item.id !== id;
        });
      setMainItems(undeleted);
    }
  };

  const deleteAllChecked = () => {
    if (mainItems.every((item) => item.completed === false)) {
      alert("No completed items to delete.");
      return;
    }
    if (confirm("Are you sure?")) {
      const allChecked = (prevItems) =>
        prevItems.filter((item) => {
          return item.completed !== true;
        });
      setMainItems(allChecked);
    }
  };

  // Save to LocalStorage whenever mainItems changes
  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(mainItems));
  }, [mainItems]);

  return (
    <div className="max-w-lg mx-2 sm:mx-auto px-4 md:px-6 py-6 mt-12 bg-gray-100 rounded-lg shadow-md flex flex-col">
      <h1 className="text-2xl font-bold mb-14 text-center">My Grocery List</h1>
      <Form setMainItems={setMainItems} />
      <GroceryList
        mainItems={mainItems}
        toggleItem={toggleItem}
        deleteItem={deleteItem}
      />
      {mainItems.length > 0 ? (
        <ClearCompleted deleteAllChecked={deleteAllChecked} />
      ) : null}
    </div>
  );
};

export default App;
