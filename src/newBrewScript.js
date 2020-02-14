import Brew from './Brew'
import BrewList from './BrewList'

$(document).ready(function() {
  $("#brewForm").submit(function(event) {
    console.log("test!");
    event.preventDefault();


  });
});
