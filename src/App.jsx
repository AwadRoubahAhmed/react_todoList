import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(["Jane", "John"]);

  const onAction = async (formData) => {
    const todo = formData.get("todo");

    todos.push(todo);
  };

  const lisTodos = todos.map((todo) => <li key={todo}>{todo}</li>);
  console.log(lisTodos);

  return (
    <div className="p-4 flex flex-col gap-4">
      <form action={onAction} className="flex items-center gap-2">
        <input name="todo" className="border rounded-md px-4 py-3 flex-1" />

        <button
          className="border rounded-md px-4 py-3 bg-zinc-800 hover:bg-zinc-700 text-white cursor-pointer font-semibold"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className="text-white">{lisTodos}</ul>
    </div>
  );
}
