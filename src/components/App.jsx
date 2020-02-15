import React from "react";
import Header from "./Header";
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Homepage from './Homepage';
import NewBrew from './NewBrew';
import AboutUs from './AboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'


function App(){

  return (
    <Container>
      <Header/>
      <Main/>
    </Container>
  );
}

export default App;
