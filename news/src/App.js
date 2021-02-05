import React,{useEffect, useState} from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import axios from 'axios'
import Footer from './Components/Footer';
import Sidebar from './Views/Sidebar'

//<Sports/>
//<Weather/>
//<Politics/>
//<Footer/>

function App() {

    const [headlines, setHeadlines] = useState([])

    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=QRcjNGNvNxxT8GAUTmAw2ch0mByGzKBL")
            .then(response => {
                setHeadlines(response.data.results)
            })
        .catch(error => {console.log("there was an error", error)})
      }, [])

      if(!headlines.length){return 'your data is coming...'}


  return (
    <div className="App">
        <NavBar/>
        <section className='desktop-container'>
            <Headlines/>
            <Sidebar headlines={headlines}/> 
        </section>
    </div>
  );
}

export default App;
