import { useState } from "react";

const Form = ({ setMainItems }) => {
  const [item, setItem] = useState("");

  const handleChange = (e) => {
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };
    setItem(capitalizeFirstLetter(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.trim()) return; // validation to prevent adding empty items
    const newItem = {
      id: Date.now(),
      completed: false,
      title: item.trim(),
    };

    setMainItems((prevItems) => [...prevItems, newItem]); /// update the mainItems state in the parent component

    setItem(""); // clear the input field after submission
  };

  return (
    <form className="mb-6" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row gap-2">
        <input
          type="text"
          value={item}
          onChange={handleChange}
          placeholder="Add a new item..."
          className="flex-1 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium md:font-bold py-2 px-4 rounded-md"
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Form;
