import React from "react";
import { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

const App = () => {
  const [todos, setTodos] = useState(
    [
      {
        id:1,
        title: 'Demo',
        description:'Demo'
      }
    ]
  );

  const [id, setId] = useState('')
  console.log(id)
  

  const deleteTodo=(id)=>{
    setTodos(todos.filter((data)=> data.id != id ))
  }

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-3">ToDo Application</h1>
        <Form 
        setTodos={setTodos} 
        todos={todos}
        id={id}
        setId={setId}
        />
        <Todos todo={todos} deleteTodo={deleteTodo} setId={setId}/>
      </div>
    </>
  );
};

export default App;
