import React from "react";
import Homepage from './Homepage';
import NewBrew from './NewBrew';
import AboutUs from './aboutUs/index';
import { Switch, Route } from 'react-router-dom';

function Content(){
  const gridContainer = {
    "display": "grid",
    "grid-template-columns": "auto auto auto auto",
    "grid-template-rows": "100px 300px",
    "grid-gap": "10px",
    "padding": "10px",
  }
  const gridContainerDiv = {
    "background-color": "rgba(255, 255, 255, 0.8)",
    "text-align": "center",
    "padding": "20px 0",
    "font-size": "30px",
    "margin":"auto"
  }
  const border = {
    "width":"30%"
  }
  return (
    <div>
      <p> Main Body! </p>
      <div style={gridContainer}>
        <div style={border}></div>
        <div style={gridContainerDiv}>
          <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/newBrew' component={NewBrew}/>
          <Route exact path='/aboutUs' component={AboutUs}/>
          </Switch>
        </div>
        <div style={border}></div>
      </div>
    </div>
  );
}

export default Content;
