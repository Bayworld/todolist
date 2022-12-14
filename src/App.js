import React, {useState} from 'react';
import './App.css';

//import components
import Form from './components/Form';
import TodoList  from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Bayo Todo list {inputText}</h1>
      </header>
      <Form setInputText = {setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
