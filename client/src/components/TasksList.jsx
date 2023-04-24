import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    //console.log('Página cargada')
    async function loadTasks() {
      const res = await getAllTasks();
      //console.log(res);
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div class='grid grid-cols-3 gap-3'>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}