import React, { Component } from 'react';

import firebase from './firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      desks: [],
    }
  }

  componentDidMount() {

    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }

      this.setState({
        desks: newState
      });

    });
  }

  render() {
    return (
      <div className='App'>
        <h1>My storefront</h1>
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
    )
  }
}

export default App;
