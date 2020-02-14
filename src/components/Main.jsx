import React from "react";
import Homepage from './Homepage';
import NewBrew from './NewBrew';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';


function Content(){

  return (
    <div>
    <p> Main Body! </p>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/newBrew' component={NewBrew}/>
      <Route path='/aboutUs' component={AboutUs}/>
    </Switch>
    </div>
  );
}

export default Content;
