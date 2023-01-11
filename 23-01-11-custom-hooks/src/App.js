import './App.css';
import { Counter } from './counter/components/counter/Counter';
import { BloodTypes } from './fetch/components/blood-types/BloodTypes';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <BloodTypes />
    </div>
  );
}

export default App;
