// cart icon

import React, { Component } from 'react';

class Icon extends Component {




    render() {
        return (
            <div>
                <img className="cart-icon" src={require("./Images/cart.png")} alt={("Icons showcaisng items added to the cart are:")} />

            </div>
        )
    }
}

export default Icon;