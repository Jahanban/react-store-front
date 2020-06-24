import React, { Component } from 'react';
import firebase from './firebase';
import Button from './Addtocart';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
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
        desks: newState,
      });
    });
  }



  render() {
    return (
      <div className='App'>
        <header className="app-header">
          <div className="app-title">
            <h1>Dream Desks</h1>
            <a href="#main" className="btn">Display Catalog</a>
          </div>

        </header>


        <div id="main">
          <ul>
            {this.state.desks.map((desk) => {
              return (
                <li className="desk-data" key={desk.id}>
                  <img src={desk.image} />
                  <p>{desk.title}</p>
                  <p>{desk.description}</p>
                  <p>${desk.price}</p>
                  <Button />
                </li>
              );
            })}
          </ul>
          <footer>
            <p>This is a footer</p>
          </footer>
        </div>
      </div>
    )
  }
}
export default App;