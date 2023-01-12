import './App.css';
import { useState } from 'react';
import { Counter } from './counter/components/counter/Counter';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';
// import { Beers } from './fetch/components/beers/Beers';

/*
  Creare un form, in cui avremo una select con options collegate ai nostri componenti (es: Counter, BloodTypes, Beers, ...).
  Al cambio della select vogliamo mostrare il componente relativo

  1. Creare un form con dentro una select
  2. Avere un valore dinamico da aggiornare con la select
  3. 

*/

function ComponentSelector(props) {
  const { selectChangeHandler } = props;

  return (
    <form>
      <select defaultValue={''} onChange={selectChangeHandler}>
        <option disabled value="">Select a component to render</option>
        <option value='counter'>Counter</option>
        <option value='bloodTypes'>Random blood type</option>
      </select>
    </form>
  )
}

function DefaultComponent () {
  return <div>Non hai selezionato un componente</div>
}

const componentMap = {
  counter: Counter,
  bloodTypes: BloodTypes,
  default: DefaultComponent
}


function App() {

  const [componentToRender, setComponentToRender] = useState('default');

  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">

      <ComponentSelector selectChangeHandler={selectChangeHandler} />
      <DynamicComponent />

      {/* <Counter />
      <hr />
      <BloodTypes />
      <hr /> 
      <Beers /> */}
    </div>
  );
}

export default App;
