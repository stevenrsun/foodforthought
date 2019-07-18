import React, { Component } from 'react';

export class SearchCard extends Component {
    state = { 
        keyMap: {'protein': 'Protein: ', 'fat': 'Fat: ', 'carbs': 'Carbs: ', 'sodium': 'Sodium: ',
                    'calories': 'Calories: ', 'age': 'Average age affected: ', 'cause': 'Causes: ',
                    'deaths': 'Deaths per year: ', 'symptom': 'Symptoms: ', 'frequency': 'Diagnosed per year: ',
                    'address': 'Address: ', 'category': 'Cuisine: ', 'price_range': 'Cost: ', 'rating': 'Rating: ', 'review_count': 'Yelp Reviews: '}
     }
    render() { 
        // get keys from element dictionary
        var nameKey = '';
        var output = [];
        for (let key in this.props.elementDict) {
            if(key in this.state.keyMap) {
                var text = this.props.elementDict[key];
                var ind = text.indexOf(this.props.params);
                var textFront = text.slice(0, ind);
                var textEnd = text.slice(ind+this.props.params.length);
                output.push(this.state.keyMap[key] + textFront + <div style={{color: 'orange'}}>this.props.params</div> + textEnd + ', ');
            }
            if(key.includes('name'))
                nameKey = key;
        }
        output.push('...');

        return ( 
            <div class="col d-flex justify-content-center">
                <div class="card bg-light border-light m-2" style={{width: '500px'}}>
                    <div class="card-header font-weight-bold" style={{fontSize: 25}}>{this.props.elementDict[nameKey]}</div>
                    <div class="card-body">
                        <div class="card-text">{output}</div>
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
        let i = 0;
        while(i < this.props.elements.length) {
            arr1.push(<div class="row"><SearchCard params = {this.props.params} elementDict = {this.props.elements[i]}/></div>)
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