import React,{useState, useEffect} from 'react';
import axios from 'axios'
import PoliticsCard from './PoliticsCard.jsx';

function Politics(props) {

useEffect(() => {
    props.renderData('politics')
}, [])

if(props.articles.length === 0){return "loading"}

    return (
        <main className='headlines-container'>          
            <div className="feature-image" style={{backgroundImage: `url(${props.articles[0].multimedia[0].url})`}}>
                <section className='feature-image-content'>
                    <h1>{props.articles[0].title}</h1>
                    <p>{props.articles[0].abstract}</p>
                </section>
            </div>

            <hr style={{width: "100%", height: '5px', backgroundColor: 'orange', marginTop: '20px', marginBottom: "3px"}}/>

            <section className='headline-container'>
                {props.articles.map((item, index) => 
                    index > 1 ? <PoliticsCard key={index} headline={item} headlineImage={item.multimedia[0].url}/>
                    : ''
                )}
            </section>    
        </main>
    )
}

export default Politics;