import React from "react";
import Homepage from './homePage/index';
import NewBrew from './newBrew/index';
import AboutUs from './aboutUs/index';
import { Switch, Route } from 'react-router-dom';

class Content extends React.component {

  constructor(props) {
    super(props);
    this.state = {
      masterBrewList: []
    };
    this.handleAddingNewBrew = this.handleAddingNewBrew.bind(this)
  }
  handleAddingNewBrew(newBrew){
    var newMasterBrewList = this.state.masterBrewList.slice();
    newMasterBrewList.push(newBrew);
    this.setState({masterBrewList: newMasterBrewList});
  }

  render() {
    return (
      <div>
               
      </div>
    );
  }
}

export default Content;
