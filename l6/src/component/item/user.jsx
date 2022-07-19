import './style.css'
import React from 'react'

function User(props){
    return(
        <div >
            <h2>{props.firstname}</h2>
            <p>{props.lastname}</p>
            <hr />
            <p>{props.age}</p>
        </div>
    )
}
export default User