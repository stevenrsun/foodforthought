import React, { Component } from 'react';
import {Text} from 'react-native';
import {NavLink} from 'react-router-dom';

export class FoodCard extends Component {
    state = { 
        style: {
        height: 250
        }
    }

    render() { 
        return ( 
        <div class="card bg-light border-light" >
            <div class="card-header font-weight-bold" style={{fontSize: 25}}>{this.props.info.name}</div>
            <img class="card-img-top" src={this.props.info.images} style={this.state.style} alt="Card image cap"/>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Protein:</Text>&nbsp;{this.props.info.protein}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Fat:</Text>&nbsp;{this.props.info.fat}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Carbs:</Text>&nbsp;{this.props.info.carbs}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Sodium:</Text>&nbsp;{this.props.info.sodium}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Calories:</Text>&nbsp;{this.props.info.calories}</div>
                </div>
                <div class="card-text"><p></p></div>
                <NavLink to={{pathname: (this.props.link + '/' + this.props.info.id), state: {dict: this.props.info}}} class="card-link">More Info</NavLink>
            </div>
        </div> 
        );
    }
}

export class RestaurantCard extends Component {
    state = { 
        style: {
        height: 250
        }
    }

    render() { 
        return ( 
        <div class="card bg-light">
            <div class="card-header font-weight-bold" style={{fontSize: 25}}>{this.props.info.name}</div>
            <img class="card-img-top" src={this.props.info.images} style={this.state.style} alt="Card image cap"/>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Cost:</Text>&nbsp;{this.props.info.cost}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Cuisine:</Text>&nbsp;{this.props.info.cuisine}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Location:</Text>&nbsp;{this.props.info.location}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Rating/10:</Text>&nbsp;{this.props.info.rating}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Yelp Reviews:</Text>&nbsp;{this.props.info.yelp}</div>
                </div>
                <div class="card-text"><p></p></div>
                <NavLink to={{pathname: this.props.link, state: {dict: this.props.info}}} class="card-link">More Info</NavLink>
            </div>
        </div> 
        );
    }
}

export class DiseaseCard extends Component {
    state = { 
        style: {
        height: 250
        }
    }

    render() { 
        return ( 
        <div class="card bg-light">
            <div class="card-header font-weight-bold" style={{fontSize: 25}}>{this.props.info.name}</div>
            <img class="card-img-top" src={this.props.info.images} style={this.state.style} alt="Card image cap"/>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item" style={{fontSize: 13}}><Text style={{fontSize: 15, fontWeight: 'bold'}}>Average age affected:</Text>&nbsp;{this.props.info.age}</div>
                    <div class="list-group-item" style={{fontSize: 13}}><Text style={{fontSize: 15, fontWeight: 'bold'}}>Causes:</Text>&nbsp;{this.props.info.cause}</div>
                    <div class="list-group-item" style={{fontSize: 13}}><Text style={{fontSize: 15, fontWeight: 'bold'}}>Deaths per year:</Text>&nbsp;{this.props.info.deaths}</div>
                    <div class="list-group-item" style={{fontSize: 13}}><Text style={{fontSize: 15, fontWeight: 'bold'}}>Symptoms:</Text>&nbsp;{this.props.info.symptom}</div>
                    <div class="list-group-item" style={{fontSize: 13}}><Text style={{fontSize: 15, fontWeight: 'bold'}}>Diagnosed per year:</Text>&nbsp;{this.props.info.frequency}</div>
                </div>
                <div class="card-text"><p></p></div>
                <NavLink to={{pathname: this.props.link, state: {dict: this.props.info}}} class="card-link">More Info</NavLink>
            </div>
        </div> 
        );
    }
}
 
export class FoodCardGrid extends Component {
    state = {}
    render() {
        var arr1 = [];
        var arr2 = [];
        var arr3 = []; 
        let i = 0;
        while(i<3 && i + this.props.currentPage*9 < this.props.elements.length) {
            arr1[i] = <div class="col-4"> <FoodCard link={this.props.link} info = {this.props.elements[i + this.props.currentPage*9]}/></div>;
            i++;
        }
        i=0;
        while(i<3 && i + 3 + this.props.currentPage*9 < this.props.elements.length) {
            arr2[i] = <div class="col-4"> <FoodCard link={this.props.link} info = {this.props.elements[i + 3 + this.props.currentPage*9]}/></div>;
            i++;
        }
        i=0;
        while(i<3 && i + 6 + this.props.currentPage*9 < this.props.elements.length) {
            arr3[i] = <div class="col-4"> <FoodCard link={this.props.link} info = {this.props.elements[i + 6 + this.props.currentPage*9]}/></div>;
            i++;
        }
        return ( 
            <div class="container">
                <div class="row">
                    {arr1}
                </div>
                <div class="row mt-5">
                    {arr2}
                </div>
                <div class="row mt-5">
                    {arr3}
                </div>
            </div>
        );
    }
}

export class RestaurantCardGrid extends Component {
    state = {}
    render() {
        var arr1 = [];
        var arr2 = [];
        var arr3 = []; 
        let i = 0;
        while(i<3 && i + this.props.currentPage*9 < this.props.elements.length) {
            arr1[i] = <div class="col-4"> <RestaurantCard link={this.props.link} info = {this.props.elements[i + this.props.currentPage*9]}/></div>;
            i++;
        }
        i=0;
        while(i<3 && i + 3 + this.props.currentPage*9 < this.props.elements.length) {
            arr2[i] = <div class="col-4"> <RestaurantCard link={this.props.link} info = {this.props.elements[i + 3 + this.props.currentPage*9]}/></div>;
            i++;
        }
        i=0;
        while(i<3 && i + 6 + this.props.currentPage*9 < this.props.elements.length) {
            arr3[i] = <div class="col-4"> <RestaurantCard link={this.props.link} info = {this.props.elements[i + 6 + this.props.currentPage*9]}/></div>;
            i++;
        }
        return ( 
            <div class="container">
                <div class="row">
                    {arr1}
                </div>
                <div class="row mt-5">
                    {arr2}
                </div>
                <div class="row mt-5">
                    {arr3}
                </div>
            </div>
        );
    }
}

export class DiseaseCardGrid extends Component {
    state = {}
    render() {
        var arr1 = [];
        var arr2 = [];
        var arr3 = []; 
        let i = 0;
        while(i<3 && i + this.props.currentPage*9 < this.props.elements.length) {
            arr1[i] = <div class="col-4"> <DiseaseCard link={this.props.link} info = {this.props.elements[i + this.props.currentPage*9]}/></div>;
            i++;
        }
        i=0;
        while(i<3 && i + 3 + this.props.currentPage*9 < this.props.elements.length) {
            arr2[i] = <div class="col-4"> <DiseaseCard link={this.props.link} info = {this.props.elements[i + 3 + this.props.currentPage*9]}/></div>;
            i++;
        }
        i=0;
        while(i<3 && i + 6 + this.props.currentPage*9 < this.props.elements.length) {
            arr3[i] = <div class="col-4"> <DiseaseCard link={this.props.link} info = {this.props.elements[i + 6 + this.props.currentPage*9]}/></div>;
            i++;
        }
        return ( 
            <div class="container">
                <div class="row">
                    {arr1}
                </div>
                <div class="row mt-5">
                    {arr2}
                </div>
                <div class="row mt-5">
                    {arr3}
                </div>
            </div>
        );
    }
}

