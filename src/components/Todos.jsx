import React from "react";

const Todos = ({ todo,deleteTodo,setId }) => {
  return (
    <div className="container mt-5 text-center">
      <table class="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Operations</th>
          </tr>
        </thead>

        {todo.map((data) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{data.title}</td>
                  <td>{data.description} </td>
                  <td className="button">
                    <button
                    onClick={()=>setId(data.id)}
                    className="btn btn-light mx-3">Edit </button>
                    <button
                    onClick={()=>deleteTodo(data.id)} 
                    className="btn btn-danger" 
                    >Delete </button>
                  </td>
                </tr> 
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Todos;
