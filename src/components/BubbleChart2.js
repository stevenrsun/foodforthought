
import React, { Component } from 'react';
import * as d3 from "d3";
import { Element } from "react-faux-dom";
import BubbleChart from '@weknow/react-bubble-chart-d3';


class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <BubbleChart
          width={800}
          height={800}
          fontFamily="Arial"
          data={[
            { label: 'Agriculture', value: 67600 },
            { label: 'Architecture', value: 79300 },
            { label: 'Biological Sciences', value: 79200 },
            { label: 'Building Construction Management', value: 96500 },
            { label: 'Businees and Marketing', value: 85300 },
            { label: 'Communication', value: 72300 },
            { label: 'Computer Science', value: 116000 },
            { label: 'Culinary Arts', value: 55300 },
            { label: 'Education', value: 57800 },
            { label: 'family and Consumer Science', value: 56500 },
            { label: 'Foreign Languages', value: 74200 },
            { label: 'Health', value: 60700 },
            { label: 'History', value: 73600 },
            { label: 'Humanities', value: 57200 },
            { label: 'Legal Studies', value: 57800 },
            { label: 'Mathematics', value: 95700 },
            { label: 'Medical Laboratory Technology', value: 64000 },
            { label: 'Parks and Recreation Management', value: 51700 },
          ]}
        />
      </div>
    );
  }
}

export default App;
