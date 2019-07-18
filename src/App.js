import React, { Component } from 'react';
import About from './about';
import Food from './pages/food';
import Disease from './pages/disease';
import Restaurant from './pages/restaurant';
import {FoodPage} from './pages/foodPages';
import {DiseasePage} from './pages/diseasePages';
import {RestaurantPage} from './pages/restaurantPages'
import logo from './photos/home_image.jpg';
import './App.css';
import {Form,Button, FormControl} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import Highlighter from "react-highlight-words";

class Navbar extends Component {
  render() {
    return (
    <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><NavLink to={'/Food'} className="nav-link">Food</NavLink></li>
            <li><Link to={'/Disease'} className="nav-link">Disease</Link></li>
            <li><NavLink to='/Restaurant' className="nav-link">Restaurant</NavLink></li>
            <li><NavLink to={'/About'} className="nav-link">About</NavLink></li>
          </ul>
          </nav>
          <hr/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Food' component={Food} />
              <Route exact path='/Restaurant' component={Restaurant} />
              <Route exact path='/Disease' component={Disease} />
              <Route exact path='/About' component={About} />
              <Route path='/FoodPage' component={FoodPage} />
              <Route path='/FoodPage/:id' component={FoodPage}/>
              <Route path='/DiseasePage' component={DiseasePage} />
              <Route path='/DiseasePage/:id' component={DiseasePage}/>
              <Route path='/RestaurantPage' component={RestaurantPage} />
              <Route path='/RestaurantPage/:id' component={RestaurantPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export class Home extends Component {
  state = {
    elements: [],
    searchParams: ''
  }

  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }

  search = (value) => {
    const pages = ['food', 'disease', 'restaurant'];
    let idx;
    for (idx = 0; idx < pages.length; idx++) {
      let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/' + pages[idx];
      fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(this.state.searchParams);
        // console.log(data);
        // this.setState({elements: data});
      })
    }
  
    // let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/search';
    // fetch(url, {
    //   method: 'post',
    //   header: '',
    //   body: [value]
    // })
    // .then(res => res.text())          // convert to plain text
    // .then(text => console.log(text)) 
  }

  render() {
    var diseaseDict = {name: "acne", symptom: "too many", age: "20", cause: "immune system overreacting", deaths: "0", frequency: "52000000", images: "https://cdn1.medicalnewstoday.com/content/images/articles/321/321218/jawline-acne.jpg"}
    return (
      <div className="img-fluid" style={styles.image}>
      <Highlighter
      highlightClassName="YourHighlightClass"
      searchWords={["and", "or", "the"]}
      autoEscape={true}
      textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"/>
      <div class="container-fluid">
          <div class="row">
            <h1 class="display-1" style = {styles.header}>
              &nbsp;Food
              <small style={{color:'orange'}}> for Thought</small>
            </h1>
          </div>
          <div class="row">
            <p class="lead text-left" style={styles.text}><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bringing people closer to health and great food, 
            <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;one click at a time.</p>
          </div>
          <div class="row">
            <p class="lead text-left" style={styles.text}><br/>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Begin your journey with a category you're interested in:</p>
          </div>
          <div class="row">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <div className="ml-4">
            <Form inline>
              <FormControl onChange={this.handleChange} name="searchParams" value={this.state.searchParams} type="text" placeholder="Search for foods, restaurants, or diseases" className="mr-sm-2" style={{width: '350px'}} />
              <Button href='/Food' style={{color: 'black'}} variant="warning" onClick={this.search(this.state.searchParams)}>Search</Button>
            </Form>
            </div>
          </div>
      </div>
    </div>
    )
  }
}


var styles = {
  image: {
    backgroundImage: `url(${logo}`,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },

  header: {
    textAlign: 'left',
    color: 'aliceblue',
    fontSize: 150
  },

  text: {
    color: 'aliceblue',
    fontSize: 30
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar/>
      </div>
    )
  }
}

export default App;

