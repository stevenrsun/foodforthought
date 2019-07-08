import React, { Component } from 'react';

export class InfoCard extends Component {
    state = { 
        style: {
        height: 250
        }
     }
    render() { 
        return ( 
        <div class="card bg-light">
            <div class="card-header">{this.props.info.header}</div>
            <img class="card-img-top" src={this.props.info.image} style={this.state.style} />
            <div class="card-body">
                <div class="card-text">
                    {this.props.info.text}
                </div>

                <div class="list-group">
                    <div class="list-group-item">{this.props.info.point1}</div>
                    <div class="list-group-item">{this.props.info.point2}</div>
                    <div class="list-group-item">{this.props.info.point3}</div>
                    <div class="list-group-item">{this.props.info.point4}</div>
                    <div class="list-group-item">{this.props.info.point5}</div>
                </div>
                <div class="card-text"><p></p></div>
                <a href={this.props.info.link} class="card-link">More Info</a>
            </div>
        </div> 
        );
    }
}
 
export class InfoCardGrid extends Component {
    state = {}
    render() { 
        return ( <div class="container">
            <div class="row">
                <div class="col"> <InfoCard info = {this.props.elements[0]} /></div>
                <div class="col"> <InfoCard info = {this.props.elements[1]} /></div>
                <div class="col"> <InfoCard info = {this.props.elements[2]} /></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <InfoCard info = {this.props.elements[3]} /></div>
                <div class="col"> <InfoCard info = {this.props.elements[4]} /></div>
                <div class="col"> <InfoCard info = {this.props.elements[5]} /></div>
            </div>
            <div class="row mt-5">
                <div class="col"> <InfoCard info = {this.props.elements[3]} /></div>
                <div class="col"> <InfoCard info = {this.props.elements[4]} /></div>
                <div class="col"> <InfoCard info = {this.props.elements[5]} /></div>
            </div>
        </div> );
    }
}

