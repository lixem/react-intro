import './TodoCounter.css';

function TodoCounter({ total, completed }){


  if (total == 0)
  {
    return(
      <h1 className="TodoCounter">
        No existen TODOS
      </h1>
    );
  
  }
  else if(total == completed){
    return(
      <h1 className="TodoCounter">
        Felicitaciones has completado todos los TODOS
      </h1>
    );
  }
  else{
    return(
      <h1 className="TodoCounter">
        Haz completado <span>{completed} </span> 
        de <span>{total}</span> TODOS
      </h1>
    );
  }
  
}

export { TodoCounter };