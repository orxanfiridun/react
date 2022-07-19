import React, { Component } from "react";
import './style.css'

class Left extends Component{
    render(){
        return(
           <div className="side-container">
            <img src="https://www.carbon49.com/wp-content/uploads/2014/03/Vertical-Forest-by-Stefano-Boeri-Architetti06.jpg" alt="" />
            <button>Read more</button>
           </div>
        )
    }
}
export default Left