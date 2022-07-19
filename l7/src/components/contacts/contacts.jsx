import React, { Component } from "react";
import './style.css'

class Contacts extends Component{
    render(){
        return(
            <div className="footer" id="contacts">
              <h2>Contact detail</h2>
              <p>Mail 1: <a href="mailto:contact@gmail.com">contact@gmail.com</a></p>
              <p>Mail 2: <a href="mailto:contac2t@gmail.com">contact2@gmail.com</a></p>
              <p>Phone 1: <a href="callno:+994503003030">+994503003030</a></p>
              <p>Phone 2: <a href="callno:+994504004040">+994504004040</a></p>
            </div>
        )
    }
}
export default Contacts