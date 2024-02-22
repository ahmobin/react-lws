import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Todo from "./components/Todo.jsx";
import Increment from "./components/Increment.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todo />
      <Increment />
  </React.StrictMode>,
)
