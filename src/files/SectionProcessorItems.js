import React, { Component } from 'react';



class SectionProcessorItems extends Component {

render() {
   return (
          <div key={this.props.ItemHash} className="feature__item">
            <input
              type="radio"
              id={this.props.ItemHash}
              className="feature__option"
              name={this.props.InputName}
              checked={this.props.InputChecked}
              onChange={this.props.InputOnChange}
            />
            <label htmlFor={this.props.ItemHash} className="feature__label">
              {this.props.ItemName} ({this.props.ItemCost})
            </label>
            
          </div>
        );
}


}







export default SectionProcessorItems;