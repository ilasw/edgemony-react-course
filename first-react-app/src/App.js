import './App.css';
import {Button} from "./atoms/button/Button";
import { Text } from './atoms/text/Text';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Container } from './layout/container/Container';

function App() {

  const customColor = 'red';

  return (
    <div className="App">
      <Header />
      <main>
        <Container>Ciao Mondo!!</Container> 
        {/* div.container > contenuto */}

        <Container withRow={0}>
          <Text as='h1'
                style={{ color: customColor }} 
                variant='title'
                >Hello world!</Text>
        </Container>
        {/* .container > .row > contenuto */}

        
        {/* {Button(propsButton1)} */}
        {/* <Button label={propsButton2.label} 
                title={propsButton2.title} /> */}
        <Button aria-label="Do not touch!" 
                variant='pippo'
                className='no-border'
                onClick={() => console.log('Ti avevo detto di non premere >:(')}
                >Non premere!</Button>
        <Button variant='primary' 
                aria-label="Useless button"
                >Button with children</Button>
      </main>
      <Footer />
    </div>
  );
}

export default App;
