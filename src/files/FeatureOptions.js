import React, { Component } from 'react';



class FeatureOptions extends Component {

	render() {


		return (

			     <fieldset className="feature" key={this.props.FeatureHash}>
          <legend className="feature__name">
            <h3>{this.props.Feature}</h3>
          </legend>
          {this.props.Options}         
        </fieldset>

			)

	}




}


export default FeatureOptions