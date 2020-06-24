// Add to cart button

import React, { Component } from 'react';

class Button extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    handleClick = () => {
        // alert("Item added to the shopping cart!");
        this.setState({

            count: this.state.count + 1,

        })
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <p>Count is: {this.state.count}</p>

                <button onClick={this.handleClick}>Add to cart</button>
            </div>
        )
    }
}




export default Button;