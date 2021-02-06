import React, {useState} from 'react'
import '../Styles/headline.css'

function BusinessCard(props){

    const cleanDate = (item) => {
        let newDate = []
        item = item.split('')
        for(let i = 0; i < item.length; i++){
            if(i > 9){
                i++
            } else {
                newDate.push(item[i])
            }
        }
        return newDate.join('')
    }

    return(
        <article className='headline-card'>
            <section className='headline-content'>
                <h3>{props.headline.title}</h3>
                <p>{props.headline.abstract}</p>    
                <section className='headline-name-date'>
                    <p>{props.headline.byline}</p>
                    <p>{cleanDate(props.headline.published_date)}</p>                    
                </section>       
            </section>
            <section className='headline-image'>
                <img style={{backgroundImage: `url(${props.headlineImage})`}}/>                
            </section>
            <hr style={{width: "100%", height: '5px', backgroundColor: 'orange', marginTop: '10px', marginBottom: "0px"}}/>
        </article>
    )
}

export default BusinessCard