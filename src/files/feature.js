import React from 'react';
import ReactDOM from 'react-dom';



function Feature(props) {



      return (
        <fieldset className="feature" key={props.featureHash}>
          <legend className="feature__name">
            <h3>{props.feature}</h3>
          </legend>
          {props.options}
        </fieldset>
      );
    }



    export default Feature;