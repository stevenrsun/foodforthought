import React from 'react';
import backImage from '../photos/food_page_background.jpg';
import {FoodCardGrid} from "../components/infocard.js";
import {PageNav} from '../components/pageNav.js';
import '../App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Food extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      elements: [],
      resetElements: [],
      page: 0,
      link: '/FoodPage',
      dropdownOpen: false,
      dropdownLabel: 'Attributes',
      min: '0',
      max: '0'
    }
  }
  
  componentDidMount() {
    let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/food';

    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({elements: data, resetElements: data});
    })
  }

  search() {
    let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/search';
    fetch(url, {
      method: 'post',
      body: ["apple"]
    })
    .then(response => response.json())
    .then(data => {
          console.log(data);
        });
        this.forceUpdate();
  }

  compare = (a, b) => {
    let key = 'name';
    if (this.state.dropdownLabel != 'Attributes') {
      key = this.state.dropdownLabel.charAt(0).toLowerCase() + this.state.dropdownLabel.slice(1);
    }
    if ( a[key] < b[key] ){
      return -1;
    }
    if ( a[key] > b[key] ){
      return 1;
    }
    return 0;
  }

  sort = () => {
    this.setState({elements: this.state.elements.sort(this.compare)});
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
      height: '220vh', // 220 vh
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


toggle() {
  this.setState(prevState => ({
    dropdownOpen: !prevState.dropdownOpen
  }));
}

changeFilterTag = (label) => {
  this.setState({dropdownLabel: label.currentTarget.getAttribute("id")})
}

handleChange = ({target}) => {
  this.setState({[target.name]: target.value})
}

handleReset = () => {
  this.setState({elements: this.state.resetElements})
}

applyFilter = () => {
  const attribute = this.state.dropdownLabel.charAt(0).toLowerCase() + this.state.dropdownLabel.slice(1);
  var filterElements = this.state.elements.filter(dict => {
      return (dict[attribute] >= this.state.min && dict[attribute] <= this.state.max)   
    })
  this.setState({elements: filterElements})
}

render() {
    return (
      <div className="img-fluid" style={this.styles.background}>
        <h1 class="display-1 mb-4" style={this.styles.header}>Food
        <small style={{color:'orange'}}> ({this.state.elements.length})</small></h1>
        <div class="justify-content-md-center row mb-5">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle color="warning" caret>
              {this.state.dropdownLabel}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.changeFilterTag} id='Calories'>Calories (g)</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Protein'>Protein (g)</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Carbs'>Carbs (g)</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Fat'>Fat (g)</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Sodium'>Sodium (mg)</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <form class="form-inline">
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <input type="number" min="0" name="min" value={this.state.min} onChange={this.handleChange} class="form-control mb-2 ml-4 mr-sm-2" id="inlineFormInputName2" placeholder="Min" style={{width: '60px'}}></input>
            <label class="sr-only" for="inlineFormInputName2">Name</label>
            <input type="number" min="0" name="max" value={this.state.max} onChange={this.handleChange} class="form-control mb-2 ml-1 mr-sm-2" id="inlineFormInputName2" placeholder="Max" style={{width: '60px'}}></input>
          </form>
          <button class="btn btn-warning ml-4" onClick={this.applyFilter} style={{height: '37px'}}>Filter</button>
          <button class="btn btn-warning ml-4" onClick={this.sort} style={{height: '37px'}}>Sort</button>
          <button class="btn btn-primary ml-3" type="reset" onClick={this.handleReset} style={{height: '37px'}}>Reset</button>
        </div>
        <FoodCardGrid link={this.state.link} elements={this.state.elements} currentPage={this.state.page}/>
        <PageNav label='Food Page Navigator' page={this.state.page} decrementPage = {this.decrementPage}
         incrementPage = {this.incrementPage} lastPage={this.state.elements.length/9} goFirstPage = {this.goFirstPage} goLastPage = {this.goLastPage}/>
        <p class="let" style={{fontSize: 30, color: 'aliceblue', textAlign: 'center'}}>of {Math.ceil(this.state.elements.length/9)}</p>
      </div> 
      
    )
  }
}


export default Food