import './App.css';
import {useState} from 'react';

function TodoItem(props){
  const {children} = props;
  const [isDone, setIsDone] = useState(false);

  const clickHandler = () => {
    setIsDone((lastValue) => !lastValue)
  }

  return <li>
    { isDone ? '✅' : '❌' } - 
    <span>{children}</span>
    <button onClick={clickHandler}>{ isDone ? 'Un-Done': 'Done'}</button>
  </li>
}

function TodoList(){
  const items = [
    { label: 'Andare a fare la spesa' },
    { label: 'Portare il cane a passeggio in modo transitivo' },
    { label: 'Fare la barba' },
  ]

  return <div>
    <h1>Todo list</h1>
    <ul>
      { items.map((item, index) => <TodoItem key={index}>{item.label}</TodoItem>) }
    </ul>
  </div>
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
