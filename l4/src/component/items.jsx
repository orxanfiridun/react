import './style.css'
import {Component} from 'react'
import React from 'react';

class Item extends Component{
    constructor(){
        super();
        this.state={
            count:10,
            price:2,
            totalPrice:20 ,
            info:"This is class item"
        }
    }
    decrease(){
        this.setState({
            count:this.state.count-1,
            totalPrice:this.state.totalPrice-this.state.price
        });
    }
    increase(){
        this.setState({
            count:this.state.count+1,
            totalPrice:this.state.totalPrice+this.state.price
        });
    }
    render (){
        return(
             <div>
                <h2>{this.state.info}</h2>
                <h4>Price:{this.state.price}$</h4>
                <h4>Total Price:{this.state.totalPrice}$</h4>
                <button onClick={()=>this.decrease()}>Decrease</button>
                <p>Count:{this.state.count}</p>
                <button onClick={()=>this.increase()}>Increase</button>
             </div>
        )
    }
}
export default Item 