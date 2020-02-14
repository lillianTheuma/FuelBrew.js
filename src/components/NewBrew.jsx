import React from "react";

function NewBrew(){
  const griddy = {
    fontFamily: 'sans-serif',
    padding: '10px',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '33% 33% 34%',
  }

  return (
    <div>
    <script src="newBrewScript.js"/>
      <form id="brewForm">
      <label>
        name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewBrew;
