import { useState } from 'react';
import './App.css';
import {TodoList} from './components/todo-list/TodoList';

// Creare un app che mi permetta di visualizzare a schermo un button
// Cliccando sul button devo poter estrarre un numero da 1 a 90;
// Una volta visualizzato il numero, il bottone non deve essere più cliccabile.

function Lottery(props){

  const {word} = props;

  const [number, setNumber] = useState();
  const pickANumber = () => Math.round(Math.random() * 91); // round, ceil, floor

  const lotteryButtonClick = () => {
    const newNumber = pickANumber();
    setNumber(newNumber); // setTimeout(() => { setState()... }, 0);
    console.log(`hai cliccato sul lottery button, numero estratto ${newNumber}!`);
  }

  return (
    <div>
      <h1>Lotteria</h1>
      <p>Numero estratto: `{number}`</p>
      <LotteryButton wasDraw={Number.isInteger(number)} clickHandler={lotteryButtonClick} />
      {/* <p>Somma di numeri</p>
      <Sum a={2} b={3} word={word} /> */}
    </div> 
  );
}

function LotteryButton (props){
  const {
    clickHandler,
    wasDraw, 
    ...attributes
  } = props;

  console.log(clickHandler);

  return <button disabled={!!wasDraw}
                 onClick={clickHandler}
                 {...attributes}
  >{!!wasDraw ? 'Numero estratto' : 'Clicca per estrarre un numero'}</button>
}

function Sum (props){
  const {a, b, word} = props;
  console.log(`La parola segreta è ${word}`)
  return `La somma è ${a + b}`;
}

function App() {

  const mySecret = 'pippo';

  return (
    <div className="App">
      {/* <TodoList /> */}

      <Lottery word={mySecret} />
    </div>
  );
}

export default App;
