import './style.css'
import React from 'react'

function Item (props){
    return(
       <div className='item-container'>
        <p> {props.main}</p>
        <hr />
        <p> {props.secondary}</p>

       </div>
    )
}
export default Item