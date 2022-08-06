import React from "react";
import "./App.css";

const App = () => (
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="mb-6 flex flex-col items-start">
      <label
        htmlFor="todo"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        Todo Name
        <input
          id="todo"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          type="text"
          value=""
          onChange={(e) => e.preventDefault()}
        />
      </label>
    </div>
    <div className="mb-6 flex justify-end">
      <input
        className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="submit"
        value="追加"
        onSubmit={(e) => e.preventDefault()}
      />
    </div>
  </form>
);

export default App;
