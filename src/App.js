import React from 'react';
import About from './about';
import Food from './food';
import Disease from './disease';
import Restaurants from './restaurant';
import logo from './index.jpeg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <Router>
                  <div>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/food">Food</Link>
                      </li>
                      <li>
                        <Link to="/disease">Disease</Link>
                      </li>
                      <li>
                        <Link to="/restaurants">Restaurants</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                    </ul>
      <hr />

      <Route exact path="/" component={Home} />
      <Route exact path="/Food" component={Food}/>
      <Route exact path="/Disease" component={Disease} />
      <Route exact path="/Restaurants" component={Restaurants} />
      <Route exact path="/About" component={About} />



    </div>
  </Router>
              </ul>
            </div>


        );
    }
}
const Home = () => (
  <div>
    <h2>Food For Thoughts</h2>
  </div>
);


class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar/>
        <div>
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    )
  }
}

export default App;

