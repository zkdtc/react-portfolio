import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Project from "../components/Project"

class Projects extends Component {

  projects_arr=[{id:0,title:'Budget Tracker',linkDeployed:' https://budget-tracker-kai.herokuapp.com',linkGithub:'https://github.com/zkdtc/budget_tracker',image:process.env.PUBLIC_URL+'/budget-tracker.png'},
  {id:1,title:'Fitness Tracker',linkDeployed:'https://youtu.be/JQgNQpiAP4Y',linkGithub:'https://github.com/zkdtc/fitness_tracker',image:process.env.PUBLIC_URL+'/fitness.png'},
  {id:2,title:'COVID-19 Survey',linkDeployed:' https://frozen-chamber-98897.herokuapp.com',linkGithub:'https://github.com/zkdtc/COVID-19-survey',image:process.env.PUBLIC_URL+'/covid-19.png'},
  {id:3,title:'Hamburger',linkDeployed:'https://tranquil-chamber-60298.herokuapp.com',linkGithub:'https://github.com/zkdtc/burger',image:process.env.PUBLIC_URL+'/burgers.png'},
  {id:4,title:'Employee Managment',linkDeployed:'https://www.youtube.com/watch?v=5DDA9oJPPIs&feature=youtu.be',linkGithub:'https://github.com/zkdtc/employee_management',image:process.env.PUBLIC_URL+'/employee-managment.png'},
  {id:5,title:'Eater',linkDeployed:'https://zkdtc.github.io/Eater/',linkGithub:'https://github.com/zkdtc/Eater',image:process.env.PUBLIC_URL+'/Eater.png'}

];

  state = {
    id: 0,
    title:"",
    linkDeployed:"",
    linkGithub:"",
    image: ""
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadNextProject();
  }

  handleBtnClick = event => {

    // Get the data-value of the clicked button
    // TODO: ???  HINT:  You'll need to reference the event object here.
    const btnType=event.target.attributes.getNamedItem('data-value').value;
    console.log(btnType)
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "next") { 
        this.loadNextProject();
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      this.loadPreviousProject();
    }
    // Replace our component's state with newState, load the next dog image
    // :  ???
    //this.setState(newState);
    //this.loadNextProject();
  };


  loadPreviousProject = () => {
    console.log('state.id',this.state.id);
    const index = this.state.id===0?this.projects_arr.length-1:this.state.id-1;
    console.log('index',index);
    this.setState(
      { ...this.projects_arr[index] }
    );
};
  loadNextProject = () => {
        console.log('state.id',this.state.id);
        const index = this.state.id===this.projects_arr.length-1?0:this.state.id+1;
        console.log('index',index);
        this.setState(
          { ...this.projects_arr[index] }
        );
        
  };

  render() {
    return (
      <div>
        <Project image={this.state.image} title={this.state.title} linkDeployed={this.state.linkDeployed} linkGithub={this.state.linkGithub} handleBtnClick={this.handleBtnClick} />
      </div>
    );
  }
}

export default Projects;
