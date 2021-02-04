import React,{useEffect} from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import axios from 'axios'
import Footer from './Components/Footer';

function App() {

  useEffect(() => {
    axios.get('https://content.guardianapis.com/search?api-key=a99321c3-6968-4d0c-9913-bc43cbfbcbd1').then(response => {
      console.log(response.data.response.results)
    })
    .catch(error => {console.log("there was an error")})
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
          <Headlines/>
          <Sports/>
          <Weather/>
          <Politics/>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
