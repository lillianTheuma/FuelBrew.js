import React from "react";
import SuggestionsContainer from "./SuggestionsContainer";
import TweetsContainer from "./TweetsContainer";
import ProfileContainer from "./ProfileContainer";

function NewBrew(){
  const griddy = {
    fontFamily: 'sans-serif',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '33% 33% 34%',
  }

  return (
    <p> New keg! </p>
  );
}

export default NewBrew;
