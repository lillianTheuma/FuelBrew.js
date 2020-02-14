import React from "react";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Homepage from './Homepage';
import NewBrew from './NewBrew';
import AboutUs from './AboutUs';


function App(){

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
