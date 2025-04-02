import React, { useState } from "react";

interface Task {
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

const TaskApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");

  const addTask = () => {
    if (title.trim() === "") return;
    setTasks([...tasks, { title, description, dueDate, completed: false }]);
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const toggleCompletion = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="border p-2 rounded w-full mb-2"
        />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="border p-4 rounded mb-2 flex justify-between items-center"
          >
            <div>
              <h2 className={`font-semibold ${task.completed ? "line-through" : ""}`}>
                {task.title}
              </h2>
              <p>{task.description}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => toggleCompletion(index)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;