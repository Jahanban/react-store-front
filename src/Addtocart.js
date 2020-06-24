// Add to cart button

import React, { Component } from 'react';

class Button extends Component {




    render() {
        return (
            <div>
                <button onClick={this.props.handleClick}>Add to cart</button>
            </div>
        )
    }
}




export default Button;