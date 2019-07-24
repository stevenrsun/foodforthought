    import React, { Component } from 'react';


    export class SearchResults extends Component {
        state = { 
            elements: this.props.elements,
            params: '',
            results: []
         }
        componentDidMount() {
            this.setState({params: this.props.location.state.params, results: this.props.location.state.result})
        }
        render() { 
            return ( 
                <div>
                    {this.state.params} <br/> akldjalkf
                    {this.state.results}
                </div>
            );
        }
    }
     