import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Article from '../Components/Article';

function Sports() {

    useEffect(() => {
        axios.get('https://content.guardianapis.com/search?api-key=a99321c3-6968-4d0c-9913-bc43cbfbcbd1').then(response => {
          console.log("sports", response.data.response.results)
        })
        .catch(error => {console.log("there was an error")})
      })

    return (
        <main>
            <section>
                IMAGE GOES HERE WITH TEXT INSIDE FULL WIDTH OF VIEWPORT
            </section>
            <section>
                thumbnails and descriptions of articles will go here. Two across at full width
            </section>    
        </main>
    )
}

export default Sports;