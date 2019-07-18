import React, { Component } from 'react';

export class SearchCard extends Component {
    state = { 
        keyMap = {'protein': 'Protein: ', 'fat': 'Fat: ', 'carbs': 'Carbs: ', 'sodium': 'Sodium: ',
                    'calories': 'Calories: ', 'age': 'Average age affected: ', 'cause': 'Causes: ',
                    'deaths': 'Deaths per year: ', 'symptom': 'Symptoms: ', 'frequency': 'Diagnosed per year: ',
                    'address': 'Address: '},
        elementDict: this.props.dict
     }
    render() { 
        // get keys from element dictionary
        var nameKey = '';
        var output = [];
        for (let key in this.state.elementDict) {
            output.push(keyMap[key] + this.state.elementDict[key] + ', ');
            if(key.includes('name'))
                nameKey = key;
        }

        return ( 
            <div class="card bg-light border-light">
                <div class="card-header font-weight-bold" style={{fontSize: 25}}>{this.state.elementDict[nameKey]}</div>
                <div class="card-body">
                    <div class="card-text">{output}</div>
                </div>
            </div>
        );
    }
}
 
export default SearchCard;