import React from "react";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewBrew from './NewBrew';
import AboutUs from './AboutUs';


function App(){

  return (
    <html>
    <body>
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/newBrew' component={NewBrew}/>
        <Route path='/aboutUs' component={AboutUs}/>
      </Switch>
    </div>
    </body>
    </html>
  );
}

export default App;
