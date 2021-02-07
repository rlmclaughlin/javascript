import React, { useEffect } from 'react';
import '../Styles/sidebar.css'

function Sidebar(props){

 if(props.length === 0){return "Loading..."}
    return(
        <section className="sidebar-container">
            {props.headlines.map((item, index) => 
                <div key={index} className='sidebar-card'>
                    <section>
                        <h5 className={index === 23 ? "liftChild" : ''}>{item.title}</h5>
                        <p>{item.byline}</p>                        
                    </section>
                    <img style={{backgroundImage: `url(${item.multimedia[0].url})`}}/> 
                    <hr style={{width: "100%", height: '2px', backgroundColor: 'orange', marginTop: '0px', marginBottom: "0px"}}/>
                </div>
            )}
            <h3>-{props.sidebarGenre}-</h3>
        </section>
    )
}

export default Sidebar