import React, { useState } from "react";
import "./App.css";

type Todo = {
  readonly id: number;
  value: string;
  checked: boolean;
  removed: boolean;
};

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleOnSubmit = () => {
    if (!text) return;

    const newTodo: Todo = {
      id: new Date().getTime(),
      value: text,
      checked: false,
      removed: false,
    };

    setTodos([newTodo, ...todos]);
    setText("");
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleOnEdit = (id: number, value: string) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));
    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) todo.value = value;

      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnCheck = (id: number, checked: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleOnRemove = (id: number, removed: boolean) => {
    const deepCopy = todos.map((todo) => ({ ...todo }));

    const newTodos = deepCopy.map((todo) => {
      if (todo.id === id) {
        todo.removed = !removed;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <div className="mb-3">
          <label
            htmlFor="todo"
            className="mb-4 block text-left text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            タスク名
            <input
              id="todo"
              className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
              value={text}
              onChange={(e) => handleOnChange(e)}
            />
          </label>
        </div>
        <div className="mb-6 flex justify-end">
          <input
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            value="追加"
            onSubmit={handleOnSubmit}
          />
        </div>
      </form>
      <h2 className="mb-2 text-left text-2xl font-bold text-gray-200">
        Todo一覧
      </h2>
      <ul className="text-left">
        {todos.map((todo) => (
          <div className="mb-2">
            <li key={todo.id} className="flex gap-x-2">
              <input
                type="checkbox"
                disabled={todo.removed}
                checked={todo.checked}
                onChange={() => handleOnCheck(todo.id, todo.checked)}
              />
              <input
                type="text"
                disabled={todo.checked || todo.removed}
                className="block flex-1 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:ring-gray-700"
                value={todo.value}
                onChange={(e) => handleOnEdit(todo.id, e.target.value)}
              />
              <button
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-xs font-medium text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-red-900 dark:hover:bg-red-700 dark:focus:ring-blue-800"
                onClick={() => handleOnRemove(todo.id, todo.removed)}
              >
                {todo.removed ? "復元" : "削除"}
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
