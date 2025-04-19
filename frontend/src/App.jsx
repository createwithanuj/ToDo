import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
const App = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/todos`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }
  , []);

  return (
    <div>

      <h1>To-Do List</h1>

      <h2>Add Task</h2>
      <TaskForm />
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description} - {task.date}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App;