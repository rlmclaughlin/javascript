import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Article from '../Components/Article';

function Headlines() {
    useEffect(() => {
        axios.get('https://content.guardianapis.com/search?api-key=a99321c3-6968-4d0c-9913-bc43cbfbcbd1').then(response => {
          console.log("HEADLINES", response.data.response.results)
        })
        .catch(error => {console.log("there was an error")})
      })

    return (
        <div>
            <h1>Headline News goes here: </h1> 
            <p>This should be on the main home page</p>
            <Article/>
            <Article/>
            <Article/>
        </div>
    )
}

export default Headlines;