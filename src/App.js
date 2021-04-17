/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-filename-extension */
import { React, useState } from 'react';
import './App.css';

function App() {
  const [currentNav, setCurrentNav] = useState('all');
  const [details, setDetails] = useState('');
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState(false);

  const onTextInput = (val) => setDetails(val);

  const onSelect = (val) => {
    setCurrentNav(val);
  };

  const onCheckboxClick = (val) => {
    const newTodo = [...todo];
    const todoIndex = todo.findIndex((todos) => todos.id === parseInt(val, 10));
    newTodo[todoIndex].completed = !newTodo[todoIndex].completed;
    setTodo(newTodo);
    console.log(todo);
  };

  const onSubmit = () => {
    try {
      setError(false);
      // eslint-disable-next-line no-throw-literal
      if (!details) throw 'error';
      const currentTodo = [...todo];
      const id = Math.floor(Math.random() * 1000);
      currentTodo.push({ id, text: details, completed: false });
      setTodo(currentTodo);
      setDetails('');
    } catch (err) {
      setError(true);
    }
  };

  const onKeyPress = (val) => {
    if (val === 'Enter') {
      onSubmit();
    }
  };

  const filterTodo = (data) => data.map((todos) => <div className="flex items-center mt-3" key={todos.id}>
    <input type="checkbox" value={todos.id} id={todos.id} onClick={(e) => onCheckboxClick(e.target.value)} checked={todos.completed} />
    <label htmlFor={todos.id} className={`montserrat-regular ml-3 text-lg ${todos.completed ? 'line-through' : ''}`}>{todos.text}</label>
  </div>);

  const list = (val) => {
    if (val === 'active') {
      return filterTodo(todo.filter((todos) => !todos.completed));
    }
    if (val === 'completed') {
      return filterTodo(todo.filter((todos) => todos.completed));
    }
    return filterTodo(todo.filter((todos) => todos.completed || !todos.completed));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-center">
        <h1 className="header mt-3">#todo</h1>
      </div>
      <div className="flex justify-around mt-6 border-bottom-gray">
        <span
          className={`montserrat-semi-bold pointer ${currentNav === 'all' ? 'active' : ''} p-3`}
          onClick={() => onSelect('all')}
          aria-hidden="true"
        >
          All
        </span>
        <span
          className={`montserrat-semi-bold pointer ${currentNav === 'active' ? 'active' : ''} p-3`}
          onClick={() => onSelect('active')}
          aria-hidden="true"
        >
          Active
        </span>
        <span
          className={`montserrat-semi-bold pointer ${currentNav === 'completed' ? 'active' : ''} p-3`}
          onClick={() => onSelect('completed')}
          aria-hidden="true"
        >
          Completed
        </span>
      </div>
      <div className="flex justify-between mt-3">
        <input
          type="text"
          placeholder="add details"
          className="montserrat-regular w-10/12 border-2 rounded-xl p-2 mr-3 outline-none"
          onChange={(e) => onTextInput(e.target.value)}
          onKeyPress={(e) => onKeyPress(e.code)}
          value={details}
        />
        <button type="button" className="montserrat-regular w-2/12 border-2 rounded-xl p-2 bg-blue-500 text-white border-none focus:outline-none hover:bg-blue-600" onClick={() => onSubmit()}>Add</button>
      </div>
      { error ? <span className="text-red-500">Todo cannot be empty!</span> : '' }
      { list(currentNav) }
    </div>
  );
}

export default App;
