import React, {Component} from 'react';
import './App.css';
import Alex from './photos/Alex.jpeg';
import Huylar from './photos/Huylar.png';
import Kelvin from './photos/Kelvin.jpeg';
import Murray from './photos/Murray.png';
import Steven from './photos/Steven.jpeg';
import William from './photos/William.jpeg';
import Jumbotron from 'reactstrap';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "Murray Lee"    : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "Kelvin Yu"       : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "Huylar Lee" : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "Steven Sun"   : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "William Suh"       : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "Alexander Ng"       : { commits: 0, closed_issues: 0, unit_tests: 0 }
      };        this.getCommits(1)
  }
  getCommits(pagenum) {
    var url = "https://gitlab.com/api/v4/projects/12990737/repository/commits?all=true&per_page=100&page=" + pagenum;
    // var url = "https://gitlab.com/api/v4/projects/" + PROJECT_ID +  "/repository/commits?all=true&per_page=100&page=" + pagenum;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        //process the data
        console.log(data)
      })
  }  

render() {
	return(
    <div>
      <center><h1>About Us</h1></center>
      <center><p>The goal of this website is to provide a place for users to build a more healthy diet by drawing correlations between
      certain foods and diseases and also providing some restaurants to find these foods. By allowing users to see and understand the 
      risks behind consuming these certain foods we can notify more people about food related diseases.</p></center>
      <hr></hr>
      <center>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Bio</th>
            <th>Major Responsibilities</th>
            <th>Commits</th>
            <th>Issues</th>
            <th>Unit Tests</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src={Alex} alt="Photo" height="150" /></td>
            <td>Alex Ng</td>
            <td>Enjoys working out and T22</td>
            <td>Phase 1: user stories, techincal paper, and planning out the project </td>
            <td>{this.state['Alexander Ng'].commits}</td>
            <td>{this.state['Alexander Ng'].closed_issues}</td>
            <td>{this.state['Alexander Ng'].unit_tests}</td>
          </tr>
          <tr>
            <td><img src={Huylar} alt="Photo" height="150" /></td>
            <td>Huylar Lee</td>
            <td>Enjoys sucba diving and game development</td>
            <td>Phase 1: API and tehcnical paper </td>
            <td>{this.state['Huylar Lee'].commits}</td>
            <td>{this.state['Huylar Lee'].closed_issues}</td>
            <td>{this.state['Huylar Lee'].unit_tests}</td>
          </tr>
          <tr>
            <td><img src={Kelvin} alt="Photo" height="150" /></td>
            <td>Kelvin Yu</td>
            <td>Enjoys playing tennis and piano</td>
            <td>Phase 1: front end</td>
            <td>{this.state['Kelvin Yu'].commits}</td>
            <td>{this.state['Kelvin Yu'].closed_issues}</td>
            <td>{this.state['Kelvin Yu'].unit_tests}</td>
          </tr>
          <tr>
            <td><img src={Murray} alt="Photo" height="150" /></td>
            <td>Murray Lee</td>
            <td>Enjoys snowboarding</td>
            <td>Phase 1: front end</td>
            <td>{this.state['Murray Lee'].commits}</td>
            <td>{this.state['Murray Lee'].closed_issues}</td>
            <td>{this.state['Murray Lee'].unit_tests}</td>
          </tr>
          <tr>
            <td><img src={Steven} alt="Photo" height="150" /></td>
            <td>Steven Sun</td>
            <td>Enjoys playing video games</td>
            <td>Phase 1: front end</td>
            <td>{this.state['Steven Sun'].commits}</td>
            <td>{this.state['Steven Sun'].closed_issues}</td>
            <td>{this.state['Steven Sun'].unit_tests}</td>
          </tr>
          <tr>
            <td><img src={William} alt="Photo" height="150" /></td>
            <td>Willaim Suh</td>
            <td>Enjoys riding the bus to class everyday</td>
            <td>Phase 1: AWS and API</td>
            <td>{this.state['William Suh'].commits}</td>
            <td>{this.state['William Suh'].closed_issues}</td>
            <td>{this.state['William Suh'].unit_tests}</td>
          </tr>
        </tbody>
      </table>
      </center>
      <br></br>
      <h2>Tools Used</h2>
      <p>React, RESTful API (Zomato API, Healthfinder.gov API, Edamam API), Git, AWS, Slack, Postman, </p>
      <br></br>
      <a href = "https://gitlab.com/williamsuh123/foodforthoughts">Link to our GitLab</a>
      <br></br>
      <a href = "https://documenter.getpostman.com/view/7931049/S1a5zQtg?version=latest">Link to our RESTful API</a>
    </div>

	)
}
}
export default About;