import React from 'react';
import Select from 'react-select';
import backImage from '../photos/rest_image.jpg';
import {RestaurantCardGrid} from "../components/infocard.js";
import {PageNav} from '../components/pageNav.js';
import {SearchCardGrid} from '../components/searchCard.js';
import {Form,Button, FormControl} from 'react-bootstrap';
import '../App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      resetElements: [],
      searchElements: [],
      page: 0,
      link: '/RestaurantPage',
      dropdownOpen: false,
      midDropdownOpen: false,
      dropdownLabel: 'Attributes',
      cuisineFilter: [],
      locationFilter: [],
      costFilter: [],
      filterKey: 'init',
      min: null,
      max: null,
      selectedOptionsAddress: [],
      selectedOptionsCost: [],
      selectedOptionsCuisine: [],
      searchParams: ''
    }
  }
  
  componentDidMount() {
    let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/restaurant';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({elements: data, resetElements: data});
    })
  }

  search = (searchParams) => {
    var searchElements = this.state.elements.filter(dict => 
      {
        var found = false;
        for(let key in dict) {
          if(dict[key].includes(this.state.searchParams))
            found = true;
        }
        return found;
      });
    this.setState({searchElements, elements: []})

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
  toggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  toggleMid = () => {
    this.setState(prevState => ({
      midDropdownOpen: !prevState.midDropdownOpen
    }));
  }
  
  changeFilterTag = (label) => {
    this.setState({dropdownLabel: label.currentTarget.getAttribute("id"), filterKey: label.currentTarget.getAttribute("fkey")})
  }
  
  handleChange = ({target}) => {
    this.setState({[target.name]: target.value})
  }
  
  handleReset = () => {
    this.setState({
      elements: this.state.resetElements,
      searchElements: [], 
      cuisineFilter: [], 
      locationFilter: [], 
      costFilter: [],
      selectedOptionsCuisine: [], 
      selectedOptionsLocation: [],
      selectedOptionsCost: [],
      min: null,
      max: null
    })
  }
  
  applyFilter = () => {
    if(this.state.dropdownLabel === 'Rating' || this.state.dropdownLabel === 'Yelp Reviews') {
      var elements = this.state.elements.filter(dict => {
          return (dict[this.state.filterKey] >= this.state.min && dict[this.state.filterKey] <= this.state.max)   
        })
      this.setState({elements})
    }
    else {
      var elements = this.state.elements.filter(dict => {
          var pass = true;
          var found = false;
          let i;
          for(i=0; i<this.state.cuisineFilter.length; i++)
            if(!dict['category'].includes(this.state.cuisineFilter[i]))
              pass = false;
          for(i=0; i<this.state.locationFilter.length; i++)
            if(!dict['address'].includes(this.state.locationFilter[i]))
              pass = false;
          for(i=0; i<this.state.costFilter.length; i++) {
            if(dict['price_range'] === (this.state.costFilter[i]))
              found = true;
            pass = found;
          }
          return pass;
      })
      this.setState({elements})
    }
  }

  handleSelectCost = (selectedOptionsCost) => {
    this.setState({selectedOptionsCost});
    if(this.state.dropdownLabel === 'Cost' && selectedOptionsCost != null)
      this.setState({costFilter: selectedOptionsCost.map(o => o.value)})
  }

  handleSelectAddress = (selectedOptionsAddress) => {
    this.setState({selectedOptionsAddress})
    if(this.state.dropdownLabel === 'Location' && selectedOptionsAddress!= null)
      this.setState({locationFilter: selectedOptionsAddress.map(o => o.value)})
  }

  handleSelectCuisine = (selectedOptionsCuisine) => {
    this.setState({selectedOptionsCuisine})
    if(this.state.dropdownLabel === 'Cuisine' && selectedOptionsCuisine!= null)
      this.setState({cuisineFilter: selectedOptionsCuisine.map(o => o.value)})
  }

  render() {
    var filterComp;
    var dropdownSet = new Set();
    var dropdownList = [];
    if(this.state.dropdownLabel === 'Cost') {
      let i;
      for (i=0; i<this.state.elements.length; i++) {
        var dict = this.state.elements[i];
        var attributes = dict[this.state.filterKey].split(',');
        let j;
        for(j=0; j<attributes.length; j++)
          dropdownSet.add(attributes[j]);
      }
      dropdownList = Array.from(dropdownSet);
      var dictList = [];
      for(i=0; i<dropdownList.length; i++){
        dictList.push({value: dropdownList[i], label: dropdownList[i].charAt(0).toUpperCase() + dropdownList[i].slice(1)});
      }
      filterComp = <div style={{width: '700px'}}>
      <Select className="ml-2" isMulti closeMenuOnSelect={false} value={this.state.selectedOptionsCost} onChange={this.handleSelectCost} options={dictList}/>
      </div>;
    }
    else if(this.state.dropdownLabel === 'Cuisine') {
      let i;
      for (i=0; i<this.state.elements.length; i++) {
        var dict = this.state.elements[i];
        var attributes = dict[this.state.filterKey].split(',');
        let j;
        for(j=0; j<attributes.length; j++)
          dropdownSet.add(attributes[j]);
      }
      dropdownList = Array.from(dropdownSet);
      var dictList = [];
      for(i=0; i<dropdownList.length; i++){
        dictList.push({value: dropdownList[i], label: dropdownList[i].charAt(0).toUpperCase() + dropdownList[i].slice(1)});
      }
      filterComp = <div style={{width: '700px'}}>
      <Select className="ml-2" isMulti closeMenuOnSelect={false} value={this.state.selectedOptionsCuisine} onChange={this.handleSelectCuisine} options={dictList}/>
      </div>;
    }
    else if(this.state.dropdownLabel === 'Location') {
      let i;
      for (i=0; i<this.state.elements.length; i++) {
        var dict = this.state.elements[i];
        var attributes = dict[this.state.filterKey].split(',');
        let j;
        for(j=0; j<attributes.length; j++)
          dropdownSet.add(attributes[j]);
      }
      dropdownList = Array.from(dropdownSet);
      var dictList = [];
      for(i=0; i<dropdownList.length; i++){
        dictList.push({value: dropdownList[i], label: dropdownList[i].charAt(0).toUpperCase() + dropdownList[i].slice(1)});
      }
      filterComp = <div style={{width: '700px'}}>
      <Select className="ml-2" isMulti closeMenuOnSelect={false} value={this.state.selectedOptionsAddress} onChange={this.handleSelectAddress} options={dictList}/>
      </div>;
    }
    else {
      filterComp = <form class="form-inline">
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input type="number" min="0" name="min" value={this.state.min} onChange={this.handleChange} class="form-control mb-2 ml-4 mr-sm-2" id="inlineFormInputName2" placeholder="Min" style={{width: '60px'}}></input>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input type="number" min="0" name="max" value={this.state.max} onChange={this.handleChange} class="form-control mb-2 ml-1 mr-sm-2" id="inlineFormInputName2" placeholder="Max" style={{width: '60px'}}></input>
      </form>;
    }
    return (
      
      
      <div className="img-fluid" style={this.styles.background}>
        <h1 class="display-1 mb-4" style={this.styles.header}>Restaurant {this.state.costFilter}
        <small style={{color:'orange'}}> ({this.state.elements.length})</small></h1>
          <div class="justify-content-md-center row mb-5">
            <Form inline>
                  <FormControl onChange={this.handleChange} name="searchParams" value={this.state.searchParams} type="text" placeholder="Search for retaurants" className="mr-sm-2" style={{width: '350px'}} />
                  <Button style={{color: 'black'}} variant="warning" onSubmit={this.search}>Search</Button>
            </Form>
          </div>
          <div class="justify-content-md-center row mb-5">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle color="warning" caret>
              {this.state.dropdownLabel}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.changeFilterTag} id='Cost' fkey='price_range'>Cost</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Cuisine' fkey='category'>Cuisine</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Location' fkey='address'>Location</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Rating' fkey='rating'>Rating</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Yelp Reviews' fkey='review_count'>Yelp Reviews</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {filterComp}
          <button class="btn btn-warning ml-4" onClick={this.applyFilter} style={{height: '37px'}}>Filter</button>
          <button class="btn btn-warning ml-4" onClick={this.sort} style={{height: '37px'}}>Sort</button>
          <button class="btn btn-primary ml-3" onClick={this.handleReset} style={{height: '37px'}}>Reset</button>
        </div> 
        <SearchCardGrid elements={this.state.searchElements} params={this.state.searchParams}/>
        <RestaurantCardGrid link={this.state.link} elements={this.state.elements} currentPage={this.state.page}/>
        <PageNav label='Food Page Navigator' page={this.state.page} decrementPage = {this.decrementPage}
         incrementPage = {this.incrementPage} lastPage={this.state.elements.length/9} goFirstPage = {this.goFirstPage} goLastPage = {this.goLastPage}/>
        <p class="let" style={{fontSize: 30, color: 'aliceblue', textAlign: 'center'}}>of {Math.ceil(this.state.elements.length/9)}</p>
      </div> 
    )
  }
}

export default Restaurant