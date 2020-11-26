import React, { Component } from 'react';





class CartList extends Component {

	render() {


      return (
      	<div>
        <div className="summary__option" key={this.props.featureHash}>
          <div className="summary__option__label">{this.props.feature} </div>
          <div className="summary__option__value">{this.props.selectedOption}</div>
          <div className="summary__option__cost">
            {this.props.Cost}
          </div>
        </div>
        </div>
      );
   




	}
}

export default CartList