import './App.css';
import { Container } from './layout/container/Container';
import { DefaultLayout } from './layout/default-layout/DefaultLayout';
import { Counter } from './components/counter/Counter';

function App() {
  console.log('re-render di App!')

  return (
    <DefaultLayout >
      <Container>
        <Counter />
      </Container>
      {/* div.container > contenuto */}
    </DefaultLayout>
  );
}

export default App;
