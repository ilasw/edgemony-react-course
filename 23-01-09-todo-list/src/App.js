import { useEffect, useState } from 'react';
import './App.css';

const API_ENDPOINT = {
  BASE: `https://random-data-api.com/api/v2`,

  get BEERS() {
    return `${this.BASE}/beers`;
  },

  CREDIT_CARDS: `credit_cards`
}

/*
  Scriviamo una app che al caricamento mostri una birra suggerita ed un pulsante,
  al click del pulsante caricare una nuova birra random 
*/

function App() {
  const [randomBeer, setRandomBeer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewBeer = () => {
    setLoading(true);
    setError(null);

    fetch(API_ENDPOINT.BEERS)
      .then(r => r.json())
      .then(beer => {
        console.log({ beer });
        setRandomBeer(beer)
      })
      .catch((err) => {
        console.error(err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  console.log('fuori da useEffect')

  // primo parametro:   funzione da eseguire
  // secondo parametro: array di dipendenze, ogni volta in cui cambia una variabile eseguire function
  useEffect(() => {

    fetchNewBeer();
    
    return () => {
      console.log('unmount');
    }
  }, [])

  if(loading){
    return `Caricamento in corso...`;
  }

  if(error || !randomBeer){
    return `Errore di connessione al server, provare a ricaricare la pagina`;
  }

  const {id, brand, name, style, alcohol} = randomBeer;

  return (
    <div className="App">
      <div>Beer code: {id}</div>
      <h1>{brand} - {name}</h1>
      <h2>{style} - {alcohol}</h2>
      <hr />
      <button onClick={() => fetchNewBeer()}>Cheers! 🍻</button>
    </div>
  );
}

export default App;
