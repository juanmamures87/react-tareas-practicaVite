import { useContext } from "react";
import { Button } from "react-bootstrap";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ tarea }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div
      className="w-100 border 
        border-success 
        text-center p-2 
        rounded-2 
        bg-info"
    >
      <h1>{tarea.title}</h1>
      <h3>Descripción:</h3>
      <p>{tarea.desc}</p>
      <Button
        variant="warning"
        onClick={() => {
          deleteTask(tarea.id);
        }}
      >
        Eliminar Tarea
      </Button>
    </div>
  );
}

export default TaskCard;
