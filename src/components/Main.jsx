import React from "react";
import Homepage from './Homepage';
import NewBrew from './NewBrew';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Content(){

  return (
    <div>
    <p> Main Body! </p>
    <Container>
    <Row>
      <Col xs>First, but unordered</Col>
      <Col xs={{ order: 12 }}>Second, but last</Col>
      <Col xs={{ order: 1 }}>Third, but second</Col>
    </Row>
  </Container>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/newBrew' component={NewBrew}/>
      <Route exact path='/aboutUs' component={AboutUs}/>
    </Switch>
    </Row>
    </div>
  );
}

export default Content;
