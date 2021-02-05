import React, {useEffect, useState} from 'react';
import Headline from './Headline.js'
import axios from 'axios'
import '../Styles/headlines.css'
import Article from '../Components/Article';

function Headlines() {
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
        <main className='headlines-container'>          
            <div className="feature-image" style={{backgroundImage: `url(${headlines[0].multimedia[0].url})`}}>
                <section className='feature-image-content'>
                    <h1>{headlines[0].title}</h1>
                    <p>{headlines[0].abstract}</p>
                </section>
            </div>
            
            <hr style={{width: "100%", height: '5px', backgroundColor: 'orange', marginTop: '15px', marginBottom: "0px"}}/>

            <section className='headline-container'>
                {headlines.map((item, index) => 
                    index > 1 ? <Headline key={index} headline={item} headlineImage={item.multimedia[0].url}/>
                    : ''
                )}
            </section>    
        </main>
    )
}

export default Headlines;