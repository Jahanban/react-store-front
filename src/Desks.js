// Desk list 

import React, { Component } from 'react';
import firebase from './firebase';

class Desks extends Component {
    render() {
        return (
            <div className='App'>
                <h1>My storefront</h1>
                <div>
                    <ul>
                        {this.state.desks.map((desk) => {
                            return (
                                <li className="desk-data" key={desk.id}>
                                    <img src={desk.image} />
                                    <p>{desk.title}</p>
                                    <p>{desk.description}</p>
                                    <p>${desk.price}</p>
                                    <button>Add to cart</button>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Desks;