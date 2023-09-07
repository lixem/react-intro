import React from 'react';
import { AppUI } from './AppUI'
import { useLocalStorage } from './UseLocalStorage';
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'LLorar con la Llorona', completed: true},
//   { text: 'LALALALALALA', completed: false},
//   { text: 'Usar estados derivados', completed: true},
// ]

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.deleteItem('TODOS_V1');

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  //!! -> Convert any value to boolen if It has a text o True, this will resolve to true and if not to false
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();

      return todoText.includes(searchText)
    }
  );

 
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return ( 
  <AppUI 
      completedTodos = { completedTodos }
      totalTodos = { totalTodos }
      searchValue = { searchValue }
      setSearchValue = { setSearchValue }
      searchedTodos = { searchedTodos }
      completeTodo = { completeTodo }
      deleteTodo = { deleteTodo }
    />
  );

}

export default App;
