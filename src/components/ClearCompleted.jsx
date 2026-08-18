import { FaTrash } from "react-icons/fa";
const ClearCompleted = ({ deleteAllChecked }) => {
  return (
    <>
      <button
        onClick={deleteAllChecked}
        className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 flex justify-center items-center gap-2 mt-6 transition-colors duration-300"
      >
        <FaTrash className=" text-white " /> Clear Completed
      </button>
    </>
  );
};

export default ClearCompleted;
