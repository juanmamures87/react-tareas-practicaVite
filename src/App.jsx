import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <section className="container">
      <TaskForm />
      <br />
      <hr />
      <br />
      <TaskList />
    </section>
  );
}

export default App;
