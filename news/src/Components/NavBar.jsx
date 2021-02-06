import React from 'react'
import {Link} from 'react-router-dom'
import '../Styles/nav.css'

function NavBar() {
    return (
        <nav>
            <h3>My News</h3>
            <ul>
                <Link to='/'><li>Breaking</li></Link>
                <Link to='politics'><li>Politics</li></Link>
                <li>Science</li>
                <li>Stocks</li>
            </ul>
        </nav>
    )
}

export default NavBar;