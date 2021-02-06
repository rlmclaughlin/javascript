import React,{useEffect, useState} from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Headlines from './Views/Headlines';
import {Route} from 'react-router-dom'
import Sports from './Views/Sports';
import Weather from './Views/Weather';
import Politics from './Views/Politics';
import axios from 'axios'
import Science from './Views/Science';
import Sidebar from './Views/Sidebar'


function App() {

    const [headlines, setHeadlines] = useState([])
    const [articles, setArticles] = useState([])

    useEffect(() => {
        axios.get("https://api.nytimes.com/svc/topstories/v2/us.json?api-key=QRcjNGNvNxxT8GAUTmAw2ch0mByGzKBL")
            .then(response => {
                setHeadlines(response.data.results)
            })
        .catch(error => {console.log("there was an error", error)})
      }, [])

     
    const renderData = (genre) => { 
        axios.get(`https://api.nytimes.com/svc/topstories/v2/${genre}.json?api-key=QRcjNGNvNxxT8GAUTmAw2ch0mByGzKBL`)
          .then(response => {
            setArticles(response.data.results)
          })
          .catch(error => {
            console.log("there was an error gathering your data", error)
          })
    }

 if(!headlines.length){return 'your data is coming...'}

  return (
    <div className="App">
        <NavBar/>
        <section className='desktop-container'>
            <Route exact path='/' component={Headlines}/>
         
            <Route path='/politics' render={ props => (
                <Politics {...props} renderData={renderData} articles={articles}/>
            )}/>
            <Route path='/science' render={ props => (
                <Science {...props} renderData={renderData} articles={articles}/>
            )}/>
                
             <Sidebar headlines={headlines}/> 
        </section>
    </div>
  );
}

export default App;
