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
            <div class="card-header font-weight-bold">{this.props.info.header}</div>
            <img class="card-img-top" src={this.props.info.image} style={this.state.style} alt/>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Protein:</Text>&nbsp;{this.props.info.point1}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Fat:</Text>&nbsp;{this.props.info.point2}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Carbs:</Text>&nbsp;{this.props.info.point3}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Sodium:</Text>&nbsp;{this.props.info.point4}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>Calories:</Text>&nbsp;{this.props.info.point5}</div>
                </div>
                <div class="card-text"><p></p></div>
                <NavLink to={{pathname: this.props.link, state: {index: this.props.index}}} class="card-link">More Info</NavLink>
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

    formatData = data => {
        var i = data.indexOf(' ');
        const res = [data.slice(0, i), data.slice(i+1)];
        return res;
    }

    render() { 
        var dataPoints = [5];
        dataPoints[0] = this.formatData(this.props.info.point1)
        dataPoints[1] = this.formatData(this.props.info.point2)
        dataPoints[2] = this.formatData(this.props.info.point3)
        dataPoints[3] = this.formatData(this.props.info.point4)
        dataPoints[4] = this.formatData(this.props.info.point5)
        return ( 
        <div class="card bg-light">
            <div class="card-header font-weight-bold">{this.props.info.header}</div>
            <img class="card-img-top" src={this.props.info.image} style={this.state.style} alt/>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[0][0]}</Text>&nbsp;{dataPoints[0][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[1][0]}</Text>&nbsp;{dataPoints[1][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[2][0]}</Text>&nbsp;{dataPoints[2][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[3][0]}</Text>&nbsp;{dataPoints[3][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[4][0]}</Text>&nbsp;{dataPoints[4][1]}</div>
                </div>
                <div class="card-text"><p></p></div>
                <NavLink to={{pathname: this.props.link, state: {index: this.props.index}}} class="card-link">More Info</NavLink>
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

    formatData = data => {
        var i = data.indexOf(' ');
        const res = [data.slice(0, i), data.slice(i+1)];
        return res;
    }

    render() { 
        var dataPoints = [5];
        dataPoints[0] = this.formatData(this.props.info.point1)
        dataPoints[1] = this.formatData(this.props.info.point2)
        dataPoints[2] = this.formatData(this.props.info.point3)
        dataPoints[3] = this.formatData(this.props.info.point4)
        dataPoints[4] = this.formatData(this.props.info.point5)
        return ( 
        <div class="card bg-light">
            <div class="card-header font-weight-bold">{this.props.info.header}</div>
            <img class="card-img-top" src={this.props.info.image} style={this.state.style} alt/>
            <div class="card-body">
                <div class="list-group">
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[0][0]}</Text>&nbsp;{dataPoints[0][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[1][0]}</Text>&nbsp;{dataPoints[1][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[2][0]}</Text>&nbsp;{dataPoints[2][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[3][0]}</Text>&nbsp;{dataPoints[3][1]}</div>
                    <div class="list-group-item"><Text style={{fontSize: 17, fontWeight: 'bold'}}>{dataPoints[4][0]}</Text>&nbsp;{dataPoints[4][1]}</div>
                </div>
                <div class="card-text"><p></p></div>
                <NavLink to={{pathname: this.props.link, state: {index: this.props.index}}} class="card-link">More Info</NavLink>
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
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[0 + this.props.currentPage*9]} index={0 + this.props.currentPage*9} /></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[1 + this.props.currentPage*9]} index={1 + this.props.currentPage*9}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[2 + this.props.currentPage*9]} index={2 + this.props.currentPage*9}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[3 + this.props.currentPage*9]} index={3 + this.props.currentPage*9}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[4 + this.props.currentPage*9]} index={4 + this.props.currentPage*9}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[5 + this.props.currentPage*9]} index={5 + this.props.currentPage*9}/></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[6 + this.props.currentPage*9]} index={6 + this.props.currentPage*9}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[7 + this.props.currentPage*9]} index={7 + this.props.currentPage*9}/></div>
                <div class="col"> <FoodCard link={this.props.link} info = {this.props.elements[8 + this.props.currentPage*9]} index={8 + this.props.currentPage*9}/></div>
            </div>
        </div> );
    }
}

