import { useState, useContext } from "react";
import Error from "./Error";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [tituloTarea, setTituloTarea] = useState("");
  const [descTarea, setDescTarea] = useState("");
  const [error, setError] = useState(false);
  const { crearTarea } = useContext(TaskContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (tituloTarea === "" || descTarea === "") {
      setError(true);
    } else {
      crearTarea(tituloTarea, descTarea);
      setError(false);
      setDescTarea("");
      setTituloTarea("");
    }
  }

  let mensajeError;
  if (error) {
    mensajeError = (
      <Error
        mensaje="DEBE INTRODUCIR EL NOMBRE DE LA TAREA Y LAS DESCRIPCIÓN"
        visto="block"
      />
    );
  } else {
    mensajeError = <Error mensaje="" visto="none" />;
  }

  return (
    <div
      className="w-50 
      m-auto 
      border 
      border-danger
      p-4"
    >
      <form onSubmit={handleSubmit}>
        <h1>Crea tu tarea:</h1>
        <label htmlFor="nomTarea">Introduce el nombre de la tarea:</label>
        <input
          className="form-control"
          type="text"
          name="nomTarea"
          id="nomTarea"
          onChange={(e) => setTituloTarea(e.target.value)}
          value={tituloTarea}
          autoFocus
        />
        <br />
        <label htmlFor="descTarea">Descripción de la tera:</label>
        <br />
        <textarea
          className="form-control"
          name="descTarea"
          id="descTarea"
          rows="2"
          onChange={(e) => setDescTarea(e.target.value)}
          value={descTarea}
        ></textarea>
        <br />
        <button className="btn btn-primary" type="submit">
          Insertar tarea
        </button>
      </form>
      <>{mensajeError}</>
    </div>
  );
}

export default TaskForm;
