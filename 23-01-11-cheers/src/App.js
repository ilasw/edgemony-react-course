import './App.css';
import {useState, useEffect} from 'react';

/*

- 2) Creare un app per visualizzare un dato random al load, 
      poi tramite un button caricare un nuovo contenuto al click. 
      
    Usare come fonte di dati https://random-data-api.com/documentation

*/

const ENDPOINTS = {
  BASE: `https://random-data-api.com/api/v2`,
  get USERS() {
    return `${this.BASE}/users`;
  }
}

function App() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setData(null);
    setError(null);
    setLoading(true);

    try{
      const data = await fetch(ENDPOINTS.USERS).then(r => r.json());
      setData(data);
    } catch(error){
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return `Loading...`;

  if(error) return `Errore!`;

  const jobTitle = data?.employment?.title;

  return (
    <div className="App">
      { 
        data 
        ? (
          <div>{data?.first_name} {data?.last_name} - {jobTitle}</div>
        ) 
        : `Nessun dato`
      }
      <button onClick={() => fetchData()}>Next! 🙋</button>
    </div>
  );
}

export default App;
