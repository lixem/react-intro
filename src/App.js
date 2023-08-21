import React, { useState } from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Tomar el Curso de Intro a React.js', completed: false},
  { text: 'LLorar con la Llorona', completed: true},
  { text: 'LALALALALALA', completed: false},
  { text: 'Usar estados derivados', completed: true},
]


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.
  useState('');

  //!! -> Convert any value to boolen if It has a text o True, this will resolve to true and if not to false
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('Los usuarios buscan todos de '+
  searchValue);

  return (
    <>

      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}/>
      <TodoList>
        { defaultTodos.map( ({text,completed}) => (
          <TodoItem 
                key={text} 
                text={text} 
                completed={completed} />
        )) }
      </TodoList>

      <CreateTodoButton />

    </>
  );
}




export default App;
