import React from "react";
import Project from "../project";

const projects = [
  {
    title: "Weather Dashboad",
    description: "Weather Report Application with current temperature, humidity, wind speed and UV index ",
    href: "https://diegoresendez.github.io/Weather_Dashboard/",
    img: "https://via.placeholder.com/150"
  },
  { 
    title: "Work Day Scheduler",
    description: "Scheduling Application to help the user keep add and delete tasks for the work day",
    href: "https://github.com/DiegoResendez/Work_Day_Scheduler",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Password Generator",
    description: "Secure Password Generator Application that will provide the user with a secure password using the number and type of characters requested by the user",
    href: "https://diegoresendez.github.io/Password_Generator/",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "The Golf Club",
    description: "Social Media application to connnect local golfers to complete a group.  Users can find games hosted by other users are various local golf coarses",
    href: "https://uwbc-golfclub.herokuapp.com/",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Trivia Game",
    description: "Fun trivia application to challenge your StarWars knowledge",
    href: "https://diegoresendez.github.io/Code_Quiz/",
    img: "https://via.placeholder.com/150"
  },
  {
    title: "Note Taker",
    description: "Note Taker application to allow user to create, save, edit and delete multiple notes as reminders or lists.",
    href: "https://fast-citadel-97394.herokuapp.com/",
    img: "https://via.placeholder.com/150"
  },
  ]



class Portfolio extends React.Component{
    render(){
        return(
        <div className="PortfolioCards">
        <h1 className="pageHeader">Portfolio </h1>
        <div className="projectCards">
        {projects.map(project => {
          return (<Project  title={project.title} description={project.description} 
           href={project.href} img={project.img} />)
          })} 
        </div>
        </div>
        )
    }
}

export default Portfolio;
