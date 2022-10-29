import { task as data } from "../data/task";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function crearTarea(titulo, desc) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: titulo,
        desc: desc,
      },
    ]);
  }

  function deleteTask(idBorrar) {
    setTasks(tasks.filter((id) => id.id !== idBorrar));
  }
  return (
    <TaskContext.Provider
      value={{
        tasks,
        crearTarea,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
