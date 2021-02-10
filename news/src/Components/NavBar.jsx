import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/nav.css'

function NavBar() {
    return (
        <nav>
            <h2>McLaughlin News</h2>
            <ul>
                <Link to='/'><li>Breaking</li></Link>
                <Link to='politics'><li>Politics</li></Link>
                <Link to='science'><li>Science</li></Link>
                <Link to='business'><li>Business</li></Link>
            </ul>
        </nav>
    )
}

export default NavBar;