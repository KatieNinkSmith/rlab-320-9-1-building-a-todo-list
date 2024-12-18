import { useState } from "react";
import ToDoList from "./pages/ToDoList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
