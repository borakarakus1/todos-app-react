import "./App.css";
import React,{useState} from 'react';
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";
function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos , setTodos] = useState  ([
    {rowNumber :1 , rowAssigned: 'Bora', rowDescription : 'Test'}
  ])
  const addTodo = (description,assigned) => {
    if(todos.length > 0){
      const newTodo = {rowNumber : todos.length+1,
                       rowDescription : description,
                       rowAssigned : assigned}
                       setTodos(todos => [...todos,newTodo])
                       console.log(todos);
    }else{
      const newTodo = {rowNumber : 1,
        rowDescription : description,
        rowAssigned : assigned}
        setTodos(todos => [...todos,newTodo])
        console.log(todos);
    }
  }

  const deleteTodo = (deleteTodoRowNumber) =>{
    let filtered = todos.filter(function(value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  } 

  return (
    <div className = 'mt-5 container'>
        <div className = 'card'>
          <div className = 'card-header'>
            Todo App
          </div>
          <div className = 'card-body'>
            <TodoTable todos = {todos} deleteTodo = {deleteTodo}/>
            <button onClick = {() => setShowAddTodoForm(!showAddTodoForm)} 
            className="btn btn-primary">
              {showAddTodoForm ? 'Close New Todo':'New Todo'}
            </button>
            {showAddTodoForm && 
              <NewTodoForm addTodo = {addTodo}/>
            }
          </div>
        </div>
    </div> 
  );
}

export default App;
