import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import React from 'react';

function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return (
        <>
            <TodoCounter 
                completed={completedTodos} 
                total={totalTodos} />
            <TodoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}/>
            <TodoList>
                { searchedTodos.map( ({text,completed}) => (
                    <TodoItem 
                        key={text} 
                        text={text} 
                        completed={completed}
                        onComplete={() => completeTodo(text)}
                        onDelete={() => deleteTodo(text)} />
                )) }
            </TodoList>

            <CreateTodoButton />

        </>
        );
}

export { AppUI };
