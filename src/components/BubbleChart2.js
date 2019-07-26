
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
            { label: 'Building Management', value: 96500 },
            { label: 'Businees and Marketing', value: 85300 },
            { label: 'Communication', value: 72300 },
            { label: 'Computer Science', value: 116000 },
            { label: 'Culinary Arts', value: 55300 },
            { label: 'Education', value: 57800 },
            { label: 'Consumer Science', value: 56500 },
            { label: 'Foreign Languages', value: 74200 },
            { label: 'Health', value: 60700 },
            { label: 'History', value: 73600 },
            { label: 'Humanities', value: 57200 },
            { label: 'Legal Studies', value: 57800 },
            { label: 'Mathematics', value: 95700 },
            { label: 'Medical Laboratory ', value: 64000 },
            { label: 'Parks and Rec Management', value: 51700 },
            { label: 'Petroleum Engineering', value: 172000 },
            { label: 'Philosophy', value: 84100 },
            { label: 'Physical Therapy', value: 86600 },
            { label: 'Psychology', value: 62100 },
            { label: 'Public Administration', value: 66100 },
            { label: 'Social Science', value: 60000 },
            { label: 'Systems Engineering', value: 121000 },
            { label: 'Technical Communication', value: 85100 },
            { label: 'Theology', value: 51200 },
            { label: 'Transportation', value: 78900 },
            { label: 'Visual Arts', value: 63800 },

          ]}
        />
      </div>
    );
  }
}

export default App;
