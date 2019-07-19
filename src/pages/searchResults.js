    import React, { Component } from 'react';
    import Highlighter from 'react-highlight-words';


    export class SearchResults extends Component {
        state = { 
            elements: this.props.elements,
            params: ''
         }
        componentDidMount() {
            this.setState({params: this.props.location.state.params})
        }
        render() { 
            return ( <div>
                <Highlighter
    highlightClassName="YourHighlightClass"
    searchWords={["and", "or", "the"]}
    autoEscape={true}
    textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
  /></div>
            );
        }
    }
     