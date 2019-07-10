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
        <div class="card bg-light">
            <div class="card-header font-weight-bold">{this.props.info.name}</div>
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
            <div class="card-header font-weight-bold">{this.props.info.name}</div>
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
            <div class="card-header font-weight-bold">{this.props.info.name}</div>
            <img class="card-img-top" src={this.props.info.images} style={this.state.style} alt="Card image cap"/>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Average age affected:</Text>&nbsp;{this.props.info.age}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Causes:</Text>&nbsp;{this.props.info.cause}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Deaths per year:</Text>&nbsp;{this.props.info.deaths}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Symptoms:</Text>&nbsp;{this.props.info.symptom}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Diagnosed per year:</Text>&nbsp;{this.props.info.frequency}</div>
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
        return ( <div class="container">
            <div class="row">
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[0 + this.props.currentPage*9]}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[1 + this.props.currentPage*9]}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[2 + this.props.currentPage*9]}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[3 + this.props.currentPage*9]}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[4 + this.props.currentPage*9]}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[5 + this.props.currentPage*9]}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[6 + this.props.currentPage*9]}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[7 + this.props.currentPage*9]}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[8 + this.props.currentPage*9]}/></div>
            </div>
        </div> );
    }
}

export class RestaurantCardGrid extends Component {
    state = {}
    render() { 
        return ( <div class="container">
            <div class="row">
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[0 + this.props.currentPage*9]}/></div>
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[1 + this.props.currentPage*9]}/></div>
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[2 + this.props.currentPage*9]}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[3 + this.props.currentPage*9]}/></div>
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[4 + this.props.currentPage*9]}/></div>
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[5 + this.props.currentPage*9]}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[6 + this.props.currentPage*9]}/></div>
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[7 + this.props.currentPage*9]}/></div>
                <div class="col"> <RestaurantCard link={this.props.link} info = {this.props.elements[8 + this.props.currentPage*9]}/></div>
            </div>
        </div> );
    }
}

export class DiseaseCardGrid extends Component {
    state = {}
    render() { 
        return ( <div class="container">
            <div class="row">
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[0 + this.props.currentPage*9]}/></div>
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[1 + this.props.currentPage*9]}/></div>
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[2 + this.props.currentPage*9]}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[3 + this.props.currentPage*9]}/></div>
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[4 + this.props.currentPage*9]}/></div>
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[5 + this.props.currentPage*9]}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[6 + this.props.currentPage*9]}/></div>
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[7 + this.props.currentPage*9]}/></div>
                <div class="col"> <DiseaseCard link={this.props.link} info = {this.props.elements[8 + this.props.currentPage*9]}/></div>
            </div>
        </div> );
    }
}

