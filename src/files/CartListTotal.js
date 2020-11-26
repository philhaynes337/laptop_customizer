import React, { Component } from 'react';


class CartListTotal extends Component {

	render() {


		return(
			<div className="summary__total">
              <div className="summary__total__label">{this.props.Label}</div>
              <div className="summary__total__value">
                {this.props.ListTotal}
              </div>
            </div>

			)
	}
}


export default CartListTotal