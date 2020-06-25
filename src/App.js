import React, { Component } from 'react';

// Firebase component
import firebase from './firebase';

// Component for 'Add to cart' and 'Cart Icon'
import Button from './Addtocart';
import Icon from './Carticon';

// CSS for the 'App' component
import './App.css';

//Set initial state, mounting and commit phase
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

  // count update function
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  // Data to be displayed on page including header, cart icon and counter, .map to iterate over the Desks array and footer.
  render() {
    return (
      <div className='App'>
        <header className="app-header">
          <div className="app-title">
            <h1>Dream Desks</h1>
            <a href="#main" className="btn" aria-label="Click to display items catalog">Display Catalog</a>
          </div>
        </header>

        <section>
          <div id="cart" className="cart-disp">
            <Icon />
            <p>{this.state.count}</p>
          </div>
        </section>

        <div id="main" className="wrapper">
          <ul>
            {this.state.desks.map((desk) => {
              return (
                <li className="desk-data" key={desk.id}>
                  <img src={desk.image} alt={'A desk'} />
                  <p>{desk.title}</p>
                  <p>{desk.description}</p>
                  <p>${desk.price}</p>
                  <Button handleClick={this.handleClick} count={this.state.count} />
                  <a className="go-cart" href="#cart" aria-label="Click on link to scroll up to cart and view the count of items">Go to cart</a>
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