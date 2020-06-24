import React, { Component } from 'react';
import firebase from './firebase';
import Button from './Addtocart';
import Icon from './Carticon';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desks: [],
      count: 0,
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

  handleClick = () => {
    // alert("Item added to the shopping cart!");
    console.log(this.state.count)
    this.setState({

      count: this.state.count + 1,

    })

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
        <section id="cart" className="cart-disp">
          <Icon />
          <p>{this.state.count}</p>

        </section>

        <div id="main" className="wrapper">
          <ul>
            {this.state.desks.map((desk) => {
              return (
                <li className="desk-data" key={desk.id}>
                  <img src={desk.image} />
                  <p>{desk.title}</p>
                  <p>{desk.description}</p>
                  <p>${desk.price}</p>
                  <Button handleClick={this.handleClick} count={this.state.count} />
                </li>
              );
            })}
          </ul>
        </div>
        <footer>
          <p>Dream Desk Store Front ©2020</p>
        </footer>
      </div>
    )
  }
}
export default App;