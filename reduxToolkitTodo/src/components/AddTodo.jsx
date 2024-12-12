import React, { useState } from "react"; // Import React and the useState hook
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux for dispatching actions
import { addTodo } from "../features/todo/todoSlice"; // Import the addTodo action from the todoSlice

function AddTodo() {
  const [input, setInput] = useState(""); // Manage local state for the input field
  const dispatch = useDispatch(); // Create a dispatch function to send actions to Redux store

  // Handler for adding a todo item
  const addTodoHandler = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page reload)
    if (!input) return;
    dispatch(addTodo(input)); // Dispatch the addTodo action with the input value as payload
    setInput(""); // Reset the input field after the todo is added
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {/* Input field for the new todo */}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..." // Placeholder text to guide the user
        value={input} // Bind the value of the input to the state variable `input`
        onChange={(e) => setInput(e.target.value)} // Update the state as the user types
      />
      {/* Submit button to add the new todo */}
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo; // Export the AddTodo component for use in other parts of the application
