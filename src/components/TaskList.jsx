import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="text-warning w-50 m-auto">
        No tiene ninguna tarea pendiente
      </h1>
    );
  }

  return (
    <div className=" container w-100">
      <div className="row">
        {tasks.map((tarea) => (
          <div className="col-4 mb-4">
            <TaskCard key={tarea.id} tarea={tarea} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
