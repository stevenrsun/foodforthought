import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Alex from './photos/Alex.jpeg';
import Kelvin from './photos/Kelvin.jpeg';
import Murray from './photos/Murray.png';
import Steven from './photos/Steven.jpeg';
import William from './photos/William.jpeg';
import {Jumbotron, Table, Container} from 'reactstrap';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        "Murray Lee"    : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "Kelvin Yu"       : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "Steven Sun"   : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "William Suh"       : { commits: 0, closed_issues: 0, unit_tests: 0 },
        "Alexander Ng"       : { commits: 0, closed_issues: 0, unit_tests: 5 },
        "Total"               : { commits: 0, closed_issues: 0, unit_tests: 0}
      };        
      this.getCommits(1)
      this.getIssues(1)
  }
  getCommits(pagenum) {
    let url = "https://gitlab.com/api/v4/projects/12990737/repository/commits?all=true&per_page=100&page=" + pagenum;
    // var url = "https://gitlab.com/api/v4/projects/" + PROJECT_ID +  "/repository/commits?all=true&per_page=100&page=" + pagenum;
    var totalCommits = 0;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(Object.entries(data).length !== 0) {
        data.forEach(commit => {
            // Log the number of commits for each person
            this.state["Total"].commits += 1;
            var name = commit.committer_name;
            if(name === 'kelvin' || name === 'yuzongyang') {
              this.state["Kelvin Yu"].commits += 1;
            } else if(name === 'Murray Lee' || name === 'murraylee') {
              this.state["Murray Lee"].commits += 1;
            } else if(name === 'william suh') {
              this.state["William Suh"].commits += 1;
            } else if(name === 'Steven Sun') {
              this.state["Steven Sun"].commits += 1;
            } else if(name === 'Huylar Lee') {
              this.state["Huylar Lee"].commits += 1;
            } else if(name === 'Alexander Ng') {
              this.state["Alexander Ng"].commits += 1;
            }
        });        
        this.forceUpdate();   
        return this.getCommits(pagenum + 1);    
      }
    })
  }
  getIssues(pagenum) {
    let url = "https://gitlab.com/api/v4/projects/12990737/issues?state=closed&per_page=100&page=" + pagenum;
    // var url = "https://gitlab.com/api/v4/projects/" + PROJECT_ID +  "/repository/commits?all=true&per_page=100&page=" + pagenum;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(Object.entries(data).length !== 0) {
        data.forEach(issue => {
            // Log the number of commits for each person
            this.state["Total"].closed_issues += 1;
            var name = issue.closed_by.name;
            if(name === 'kelvin' || name === 'yuzongyang') {
              this.state["Kelvin Yu"].closed_issues += 1;
            } else if(name === 'Murray Lee' || name === 'murraylee') {
              this.state["Murray Lee"].closed_issues += 1;
            } else if(name === 'william suh') {
              this.state["William Suh"].closed_issues += 1;
            } else if(name === 'Steven Sun') {
              this.state["Steven Sun"].closed_issues += 1;
            } else if(name === 'Huylar Lee') {
              this.state["Huylar Lee"].closed_issues += 1;
            } else if(name === 'Alexander Ng') {
              this.state["Alexander Ng"].closed_issues += 1;
            }
        });
        this.forceUpdate();
        return this.getIssues(pagenum + 1);
        }
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
      <Table>
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
            <td>Phase 1: user stories, techincal paper, and planning out the project <br></br>
                Phase 2: collecting data <br></br>
                Phase 3: scrape data <br></br>
                Phase 4: refactoring<br></br>
            </td>
            <td>{this.state['Alexander Ng'].commits}</td>
            <td>{this.state['Alexander Ng'].closed_issues}</td>
            <td>{this.state['Alexander Ng'].unit_tests}</td>
          </tr>
          <tr>
            <td><img src={Kelvin} alt="Photo" height="150" /></td>
            <td>Kelvin Yu</td>
            <td>Enjoys playing tennis and piano</td>
            <td>Phase 1: front end <br></br>
                Phase 2: uml diagram, mocha tests<br></br>
                Phase 3: unit tests<br></br>
                Phase 4: visualizations<br></br>
            </td>
            <td>{this.state['Kelvin Yu'].commits}</td>
            {/* <td>{this.state['Kelvin Yu'].closed_issues}</td> */}
            <td>5</td>
            <td>25</td>
          </tr>
          <tr>
            <td><img src={Murray} alt="Photo" height="150" /></td>
            <td>Murray Lee</td>
            <td>Enjoys snowboarding</td>
            <td>Phase 1: front end <br></br>
                Phase 2: api calls, frontend, gui tests <br></br>
                Phase 3: sorting, searching, sorting<br></br>
                Phase 4: visualizations<br></br>
            </td>
            <td>{this.state['Murray Lee'].commits}</td>
            <td>{this.state['Murray Lee'].closed_issues}</td>
            {/* <td>{this.state['Murray Lee'].unit_tests}</td> */}
            <td>10</td>
          </tr>
          <tr>
            <td><img src={Steven} alt="Photo" height="150" /></td>
            <td>Steven Sun</td>
            <td>Enjoys playing video games</td>
            <td>Phase 1: front end <br></br>
                Phase 2: pagination, frontend<br></br>
                Phase 3: filtering, searching, sorting<br></br>
                Phase 4: refactoring<br></br>
            </td>
            <td>{this.state['Steven Sun'].commits}</td>
            <td>{this.state['Steven Sun'].closed_issues}</td>
            {/* <td>{this.state['Steven Sun'].unit_tests}</td> */}
            <td>8</td>
          </tr>
          <tr>
            <td><img src={William} alt="Photo" height="150" /></td>
            <td>William Suh</td>
            <td>Enjoys riding the bus to class everyday</td>
            <td>Phase 1: AWS and API <br></br>
                Phase 2: backend<br></br>
                Phase 3: backend search<br></br>
                Phase 4: presentation, refactoring<br></br>
            </td>
            <td>{this.state['William Suh'].commits}</td>
            <td>{this.state['William Suh'].closed_issues}</td>
            {/* <td>{this.state['William Suh'].unit_tests}</td> */}
            <td>5</td>
          </tr>
        </tbody>
      </Table>
      <br></br>
      <h2>Total Commits: {this.state['Total'].commits}</h2>
      <h2>Total Issues: {this.state['Total'].closed_issues}</h2>
      <h2>Total Unit Tests: 53</h2>
      <br></br>
      <h2>Tools Used</h2>
      <p>React, RESTful API (Zomato API, Healthfinder.gov API, Edamam API), Git, AWS, Slack, Postman, </p>
      <br></br>
      <a href = "https://gitlab.com/williamsuh123/foodforthoughts">Link to our GitLab</a>
      <br></br>
      <a href = "http://api.foodforthoughtt.me/">Link to our RESTful API</a>
    </div>

	)
}
}