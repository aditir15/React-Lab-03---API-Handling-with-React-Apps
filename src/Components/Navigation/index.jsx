import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigation(){
    return (
        <div>
            <nav class="menu">
                <div class="wrapper">
                    <ul>
                        <Link to="/business"><li>Business News</li></Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}