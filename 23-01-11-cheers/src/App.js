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

const data = {
  "id": 4244,
  "uid": "e7561fb2-cd6f-4ba9-9657-03ba4c857339",
  "password": "tJcojZ9CYv",
  "first_name": "Savannah",
  "last_name": "Steuber",
  "username": "savannah.steuber",
  "email": "savannah.steuber@email.com",
  "avatar": "https://robohash.org/voluptatemofficiabeatae.png?size=300x300&set=set1",
  "gender": "Bigender",
  "phone_number": "+507 1-317-932-4257 x743",
  "social_insurance_number": "465907574",
  "date_of_birth": "1980-07-18",
  "employment": {
    "title": "Mining Consultant",
    "key_skill": "Technical savvy"
  },
  "address": {
    "city": "Caseyborough",
    "street_name": "Cinda Corner",
    "street_address": "5968 Daniel Squares",
    "zip_code": "73934",
    "state": "Alaska",
    "country": "United States",
    "coordinates": {
      "lat": -54.14361548414118,
      "lng": 95.22920596707758
    }
  },
  "credit_card": {
    "cc_number": "4846179341112"
  },
  "subscription": {
    "plan": "Diamond",
    "status": "Pending",
    "payment_method": "Paypal",
    "term": "Annual"
  }
};

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
