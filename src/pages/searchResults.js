    import React, { Component } from 'react';

    export class SearchResults extends Component {
        state = { 
            elements: this.props.elements,
            params: ''
         }
        componentDidMount() {
            this.setState({params: this.props.location.state.params})
        }
        render() { 
            return ( 
                this.state.params
            );
        }
    }
     