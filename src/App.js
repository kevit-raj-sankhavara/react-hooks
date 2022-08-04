import React, { useReducer, useState } from "react"

function App() {
  function reducer(todos, action) {
    switch (action.type) {
      case "add-todo":
        return [...todos, action.payload]
      case "toggle-todo":
        return todos.map(todo => {
          if (todo.id === action.payload.id)
            return { ...todo, completed: !todo.completed }
          return todo;
        })
      case "delete-todo":
        return todos.filter(todo => todo.id !== action.payload.id)
      default:
        return todos
    }
  }

  const [todos, dispatch] = useReducer(reducer, [])
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "add-todo", payload: { id: Date.now(), name: value, completed: false } })
    setValue("");
  }

  const toggleTodo = (id) => {
    dispatch({ type: "toggle-todo", payload: { id } })
  }

  const deleteTodo = (id) => {
    dispatch({ type: "delete-todo", payload: { id } })
  }


  return (
    <>
      <h1>Your TODOS</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">add</button>
      </form>
      {
        todos.map(todo => {
          return (
            <div>
              <p style={{ color: todo.completed ? "gray" : "black" }}>{todo.name}</p>
              <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}

export default App