// import the necessities
import React, {Component} from 'react';
import Button from './Button';

// Tickets component to display showtimes and buttons for both movies
function Tickets() {
  return (
  		<div className="shows">
            <p className="show-third">May 3 2015</p>
            <p className="show-fourth">May 4 2015</p>
            <div className="button-third">
            	<Button />
            </div>
            <div className="button-fourth">
            	<Button />
            </div>	
        </div> 
  );
}

export default Tickets;