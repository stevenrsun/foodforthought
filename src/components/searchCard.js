import React, { Component } from 'react';
import Highlighter from 'react-highlight-words';
import {Text} from 'react-native';
import {NavLink} from 'react-router-dom';



export class SearchCard extends Component {
    state = { 
        keyMap: {'name': 'Name: ', 'business_name': 'Name: ', 'protein': 'Protein: ', 'fat': 'Fat: ', 'carbs': 'Carbs: ', 'sodium': 'Sodium: ',
                    'calories': 'Calories: ', 'age': 'Average age affected: ', 'cause': 'Causes: ',
                    'deaths': 'Deaths per year: ', 'symptom': 'Symptoms: ', 'frequency': 'Diagnosed per year: ',
                    'address': 'Address: ', 'category': 'Cuisine: ', 'price_range': 'Cost: ', 'rating': 'Rating: ', 'review_count': 'Yelp Reviews: '}
     }

    render() { 
        var output = [];
        var nameKey = '';
        var params = this.props.params.split(' ');
        for(let key in this.props.elementDict) {
            if(key in this.state.keyMap) {
                var text = this.props.elementDict[key];
                var permaText = text;
                if(typeof(text) != 'string')
                    text = text.toString();
                var paramsToHighlightIndices = [];
                var paramsToHighlight = [];
                let i;
                for(i=0; i<params.length; i++) {
                    if(text.includes(params[i])) {
                        paramsToHighlight.push(params[i]);
                        paramsToHighlightIndices.push(text.indexOf(params[i]));
                    }
                }
                paramsToHighlightIndices.sort();
                var splitText = [];
                for(i=0; i<paramsToHighlightIndices.length; i++){
                    var newText;
                    if(i=0 && paramsToHighlightIndices[i] != 0)
                        newText = text.slice(0, paramsToHighlight[i]);
                    else if(i=0)
                        newText = text.slice(0, 8);
                    else if(i=paramsToHighlightIndices.length - 1)
                        newText = text.slice(paramsToHighlightIndices[i]);
                    else
                        newText = text.slice(paramsToHighlightIndices[i], paramsToHighlightIndices[i + 1]);
                    splitText.push(newText);
                    if(i != paramsToHighlightIndices.length - 1)
                        text = text.slice(paramsToHighlightIndices[i+1]);
                }
                var line = [];
                line.push(<Text>{this.state.keyMap[key]}</Text>)
                let j;
                var included = false;
                for(i=0; i<paramsToHighlight.length; i++) {
                    if(permaText.includes(paramsToHighlight[i]))
                        included = true;
                }
                if(included)
                    for(j=0; j<splitText.length; j++) {
                        if(j%2 != 0) 
                            line.push(<Text>{splitText[j]}</Text>)
                        else
                            line.push(<Text style={{fontWeight: 'bold'}}>{splitText[j]}</Text>)
                    }
                else
                    line.push(<Text>{permaText}</Text>)
                line.push(<Text><br/></Text>)
                output.push(line);
            }
        }
        return ( 
                <div class="col d-flex justify-content-center">
                    <div class="card bg-light border-light m-2" style={{width:'500px'}}>
                        <div class="card-body">
                            <div class="card-text">{output}</div>
                            <NavLink to={{pathname: (this.props.link), state: {dict: this.props.elementDict}}} class="card-link">More Info</NavLink>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export class SearchCardGrid extends Component {
    state = {
    }
    render() {
        var arr1 = [];
        var test = <React.Fragment><Text>fuck</Text><Text>you!</Text></React.Fragment>;
        let i = 0;
        while(i < this.props.elements.length) {
            arr1.push(<div class="row"><SearchCard link={this.props.link} params = {this.props.params} elementDict = {this.props.elements[i]}/></div>)
            i++;
        }
        return ( 
            <div class="container">
                {arr1}
            </div>
        );
    }
}
 
export default SearchCard;