import React from 'react';
import backImage from '../photos/rest_image.jpg';
import {RestaurantCardGrid} from "../components/infocard.js";
import {PageNav} from '../components/pageNav.js';
import '../App.css';


class Restaurant extends React.Component {
  state = {
    elements: [],

    page: 0,

    link: '/RestaurantPage'
  }
  
  componentDidMount() {
    let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/restaurant';
    console.log("first");
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const elements = data;
      this.setState({elements});
    })
  }
  
  incrementPage = () => {
    const page = this.state.page + 1;
    this.setState({page});
  }

  decrementPage = () => {
    const page = this.state.page - 1;
    this.setState({page});
  }

  goFirstPage = () => {
    const page = 0;
    this.setState({page});
  }

  goLastPage = () => {
    const page = Math.ceil(this.state.elements.length/9) - 1;
    this.setState({page});
  }

  styles = {
    image: {
      width: 200,
      height: 150,
    },

    background:{
      backgroundImage: `url(${backImage}`,
      height: '210vh', // 220 vh
      width: '100vw',
      overflow: 'auto',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed'
    },

    header: {
      textAlign: 'center',
      color: 'aliceblue',
      fontSize: 150
    },
  };

  render() {
    return (
      
      
      <div className="img-fluid" style={this.styles.background}>
        <h1 class="display-1 mb-4" style={this.styles.header}>Restaurant 
        <small style={{color:'orange'}}> ({this.state.elements.length})</small></h1>

        <RestaurantCardGrid link={this.state.link} elements={this.state.elements} currentPage={this.state.page}/>
        <PageNav label='Food Page Navigator' page={this.state.page} decrementPage = {this.decrementPage}
         incrementPage = {this.incrementPage} lastPage={this.state.elements.length/9} goFirstPage = {this.goFirstPage} goLastPage = {this.goLastPage}/>
        <p class="let" style={{fontSize: 30, color: 'aliceblue', textAlign: 'center'}}>of {Math.ceil(this.state.elements.length/9)}</p>
      </div> 
    )
  }
}

export default Restaurant