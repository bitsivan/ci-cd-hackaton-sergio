import React, { useState } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState(["task 1", "task 2", "task 3"]);
  let input: any = "task 1";

  const handleAdd = () => {
    tasks.push(input);
    input = ""; // Reset input after adding
    setTasks(tasks);
  };

  const handleDelete = (index: any) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ padding: 20 }}>
      <h3>learn react</h3>
      <h2>📝 To-Do List</h2>
      <input
        key="taskInput"
        type="text"
        value={input}
        placeholder="Add a task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
