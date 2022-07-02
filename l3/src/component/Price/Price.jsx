import  React,{ Component } from 'react'
import './style.css'
import { useState } from 'react'


function Price (){
    const [price, setPrice]= useState(0);
    const increase =()=>{
        if(price!=20)
        setPrice(price+1)
    }
    const decrease =()=>{
        if(price!=0)
        setPrice(price-1)
    }
    const minus2 =()=>{
        if(price>=2)
        setPrice(price-2)
    }
    const plus2 =()=>{
        if(price<=18)
        setPrice(price+2)
    }
    const setMax =()=>{
        setPrice(20)
    }
    const setMin =()=>{
        setPrice(0)
    }
    return(
        <div className='price-container'>
            <button onClick={setMin}>Set min</button>
            <button onClick={minus2}>-2</button>
            <button onClick={decrease}>-1</button>
            <span>{price}</span>
            <button onClick={increase}>+1</button>
            <button onClick={plus2}>+2 </button>
            <button onClick={setMax}>Set max</button>
        </div>
    )

}
export default Price;