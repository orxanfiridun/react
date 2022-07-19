import './style.css'
import React from 'react'


export default function Header(){
    return(
        <React.Fragment>
            <ul className='navigation'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#contacts">Contact</a></li>
                <li><a href="#workers">Products</a></li>
                <li><a href="#">About us</a></li>

            </ul>
            <div className='header-container'>
                <img src="https://previsorinsurance.com/wp-content/uploads/Group-of-5-construction-workers-wearing-hard-hats-talk-in-a-circle.jpg" alt="" />
                <h2> Lorem ipsum dolor sit.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
        </React.Fragment>
    )
}