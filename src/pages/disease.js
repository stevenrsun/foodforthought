import React from 'react';
import Select from 'react-select';
import backImage from '../photos/disease_background.jpg';
import {DiseaseCardGrid} from "../components/infocard.js";
import {PageNav} from '../components/pageNav.js';
import '../App.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { thisExpression } from '@babel/types';

class disease extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: [],
      resetElements: [],
      page: 0,
      link: '/DiseasePage',
      dropdownOpen: false,
      midDropdownOpen: false,
      dropdownLabel: 'Attributes',
      causeFilter: [],
      symptomFilter: [],
      filterKey: 'init',
      min: null,
      max: null,
      selectedOptionsSymptom: [],
      selectedOptionsCause: []
    }
  }
  
  componentDidMount() {
    let url = 'https://cors-anywhere.herokuapp.com/http://api.foodforthoughtt.me/disease';
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState({elements: data, resetElements: data});
    })
  }

  compare = (a, b) => {
    let key = 'name';
    if (this.state.filterKey != 'init') {
      key = this.state.filterKey;
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
      causeFilter: [], 
      symptomFilter: [], 
      selectedOptionsCause: [], 
      selectedOptionsSymptom: [],
      min: null,
      max: null
    })
  }
  
  applyFilter = () => {
    if(this.state.dropdownLabel != 'Causes' && this.state.dropdownLabel != 'Symptoms') {
      var elements = this.state.elements.filter(dict => {
          return (dict[this.state.filterKey] >= this.state.min && dict[this.state.filterKey] <= this.state.max)   
        })
      this.setState({elements})
    }
    else {
      var elements = this.state.elements.filter(dict => {
          var pass = true;
          let i;
          for(i=0; i<this.state.causeFilter.length; i++)
            if(!dict['cause'].includes(this.state.causeFilter[i]))
              pass = false;
          for(i=0; i<this.state.symptomFilter.length; i++)
            if(!dict['symptom'].includes(this.state.symptomFilter[i]))
              pass = false;
          return pass;
      })
      this.setState({elements})
    }
  }

  handleSelectCause = (selectedOptionsCause) => {
    this.setState({selectedOptionsCause});
    if(this.state.dropdownLabel === 'Causes' && selectedOptionsCause != null)
      this.setState({causeFilter: selectedOptionsCause.map(o => o.value)})
  }

  handleSelectSymptom = (selectedOptionsSymptom) => {
    this.setState({selectedOptionsSymptom})
    if(this.state.dropdownLabel === 'Symptoms' && selectedOptionsSymptom!= null)
      this.setState({symptomFilter: selectedOptionsSymptom.map(o => o.value)})
  }
  
  render = () => {
    var filterComp;
    var dropdownSet = new Set();
    var dropdownList = [];
    if(this.state.dropdownLabel === 'Causes') {
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
      <Select className="ml-2" isMulti closeMenuOnSelect={false} value={this.state.selectedOptionsCause} onChange={this.handleSelectCause} options={dictList}/>
      </div>;
    }
    else if(this.state.dropdownLabel === 'Symptoms') {
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
      <Select className="ml-2" isMulti closeMenuOnSelect={false} value={this.state.selectedOptionsSymptom} onChange={this.handleSelectSymptom} options={dictList}/>
      </div>;
    }
    else 
      filterComp = <form class="form-inline">
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input type="number" min="0" name="min" value={this.state.min} onChange={this.handleChange} class="form-control mb-2 ml-4 mr-sm-2" id="inlineFormInputName2" placeholder="Min" style={{width: '60px'}}></input>
      <label class="sr-only" for="inlineFormInputName2">Name</label>
      <input type="number" min="0" name="max" value={this.state.max} onChange={this.handleChange} class="form-control mb-2 ml-1 mr-sm-2" id="inlineFormInputName2" placeholder="Max" style={{width: '60px'}}></input>
      </form>;
    
    return (
      <div className="img-fluid" style={this.styles.background}>
        <h1 class="display-1 mb-4" style={this.styles.header}>Disease
        <small style={{color:'orange'}}> ({this.state.elements.length})</small></h1>

        <div class="justify-content-md-center row mb-5">
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle color="warning" caret>
              {this.state.dropdownLabel}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.changeFilterTag} id='Average age affected' fkey='age'>Average age affected</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Causes' fkey='cause'>Causes</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Deaths per year' fkey='deaths'>Deaths per year</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Symptoms' fkey='symptom'>Symptoms</DropdownItem>
              <DropdownItem onClick={this.changeFilterTag} id='Diagnosed per year' fkey='frequency'>Diagnosed per year</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {filterComp}
          <button class="btn btn-warning ml-4" onClick={this.applyFilter} style={{height: '37px'}}>Filter</button>
          <button class="btn btn-warning ml-4" onClick={this.sort} style={{height: '37px'}}>Sort</button>
          <button class="btn btn-primary ml-3" onClick={this.handleReset} style={{height: '37px'}}>Reset</button>
        </div>
        <DiseaseCardGrid link={this.state.link} elements={this.state.elements} currentPage={this.state.page}/>
        <PageNav label='Disease Page Navigator' page={this.state.page} decrementPage = {this.decrementPage}
         incrementPage = {this.incrementPage} lastPage={this.state.elements.length/9} goFirstPage = {this.goFirstPage} goLastPage = {this.goLastPage}/>
        <p class="let" style={{fontSize: 30, color: 'aliceblue', textAlign: 'center'}}>of {Math.ceil(this.state.elements.length/9)}</p>
      </div> 
    )
  }
}

export default disease