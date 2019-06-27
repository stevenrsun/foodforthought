import React from 'react';
import logo from './logo.svg';
import './App.css';


class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="#">Food</a></li>
                <li><a href="#">Diseases</a></li>
                <li><a href="#">Restaurants</a></li>
                <li><a href="#">About us</a></li>
              </ul>
            </div>
        );
    }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar/>
        <div>
        Home Page
        </div>
      </div>
    )
  }
}

export default App;

