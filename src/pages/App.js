import "../assets/css/App.css";
import AddTodo from "../component/AddTodo";
import ListTodo from "../component/ListTodo";

function App() {
  return (
    <div className="container">
      <h3>TO DO LIST APP</h3>
      <AddTodo />
      <ListTodo />
    </div>
  );
}

export default App;
