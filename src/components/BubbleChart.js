
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
            { label: 'Macular Degeneration', value: 20000 },
            { label: 'Diabetes Type 2', value: 10000000 },
            { label: 'Vitamin Deficiency', value: 35000000 },
            { label: 'Mineral Deficiency', value: 35000000 },
            { label: 'Cancer', value: 450000 },
            { label: 'Heart Disease', value: 450000 },
            { label: 'High Cholesterol', value: 450000 },
            { label: 'Inflammation', value: 35000000 },
            { label: 'Diabetes', value: 2500000 },
            { label: 'Urinary Tract Infection', value: 30000000 },
            { label: 'Osteoprosis', value: 500000 },
            { label: 'Alzheimer\'s disease' , value: 12000000 },
            { label: 'Kidney Disease', value: 250000 },
            { label: 'Hypertension', value: 1500000 },
            { label: 'Eczema', value: 4000000 },
            { label: 'Crohn\'s Disease', value: 1500000 },
            { label: 'Indigestion', value: 2000000 },
            { label: 'Depression', value: 500000 },
            { label: 'Anxiety', value: 500000 },
            { label: 'Influenza Thylene', value: 25000000 }
          ]}
        />
      </div>
    );
  }
}

export default App;
