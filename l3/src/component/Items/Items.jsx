import React, { useState } from "react";
import './style.css'

function Items(props){
    const [count, setCount]=useState(1);
    const [totalPrice, setTotalPrice]=useState(0)
    const find=()=>{
       setCount(document.getElementById("count_input").value);
       setTotalPrice(count*props.price)
    }
    
    return(
        <div className="items-container">
            <select id="count_input">
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="3">3</option>
             <option value="4">4</option>
             <option value="5">5</option>
            </select>
            <span>{props.price}$</span>
            <button onClick={find}>Find</button>
             <p>{totalPrice}$</p>
   
        </div>
    )
}

export default Items