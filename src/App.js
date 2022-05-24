import "./App.css";
import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
