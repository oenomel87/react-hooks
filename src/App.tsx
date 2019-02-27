import React, { useEffect, useState } from 'react';
import './App.css';

interface ITodo {
  title: string,
  datetime: Date,
}

const Todo = (todo: ITodo) => {
  return (
    <div className="todo">
      <div className="title">{ todo.title }</div>
    </div>
  );
}

const App = () => {

  const [list, setList] = useState<Array<ITodo>>([]);
  const addTodo = () => {
    setList(list.concat([{
      title: getTitle(),
      datetime: new Date()
    }]));
    resetTitle();
  }

  const getTitle = (): string => {
    const elem = document.querySelectorAll('input.title')[0] as HTMLInputElement;
    return elem.value;
  }

  const resetTitle = (): void => {
    const elem = document.querySelectorAll('input.title')[0] as HTMLInputElement;
    elem.value = ''; 
  }

  return (
    <div className="app">
      <h1 className="hero">My toodo</h1>
      <div className="input-wrap">
        <div className="input">
          <input type="text" className="title"/>
        </div>
        <button onClick={e => addTodo()}>Add</button>
      </div>
      <div className="list">
        { list.map((todo: ITodo, index: number) => <Todo key={index} title={todo.title} datetime={todo.datetime}/>) }
      </div>
    </div>
  );
}

export default App;
