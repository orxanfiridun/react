import './style.css'
import React, { Component } from 'react'
import Item from '../item/item'

class Main extends Component {
    constructor() {
        super()
        this.state = {
            scripts: [
                {
                    main_text: "1 Lorem ipsum dolor sit.",
                    secondary_text: "1 Lorem ipsum dolor sit amet consectetur."
                },
                {
                    main_text: "2 Lorem ipsum dolor sit.",
                    secondary_text: "2 Lorem ipsum dolor sit amet consectetur."
                },
                {
                    main_text: "3 Lorem ipsum dolor sit.",
                    secondary_text: "3 Lorem ipsum dolor sit amet consectetur."
                }
            ]

        }
    }
    render() {
        return (
            <div className='main-container'>
                <Item main={this.state.scripts[0].main_text} secondary={this.state.scripts[0].secondary_text} />
                <Item main={this.state.scripts[1].main_text} secondary={this.state.scripts[1].secondary_text} />
                <Item main={this.state.scripts[2].main_text} secondary={this.state.scripts[2].secondary_text} />
            </div>
        )
    }
}
export default Main