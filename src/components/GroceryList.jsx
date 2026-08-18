const GroceryList = ({ mainItems, toggleItem, deleteItem }) => {
  return (
    <>
      {mainItems.length > 0 ? (
        <p className="text-lg text-end text-gray-500 font-semibold mb-2">
          {mainItems.length} item{mainItems.length === 1 ? "" : "s"}
        </p>
      ) : null}

      {mainItems.length === 0 ? (
        <p className="text-gray-400 text-center py-4">
          Your grocery list is empty!
        </p>
      ) : (
        <div className="overflow-y-auto max-h-96 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <ul className="space-y-3">
            {mainItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border"
              >
                <label className="flex items-center gap-3 cursor-pointer select-none flex-1">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => toggleItem(item.id)}
                    className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
                  />

                  {/* Conditional Tailwind line-through class */}
                  <span
                    className={
                      item.completed
                        ? "line-through text-gray-400"
                        : "text-gray-800 font-medium"
                    }
                  >
                    {item.title}
                  </span>
                </label>

                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-bold px-2 py-1"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default GroceryList;
