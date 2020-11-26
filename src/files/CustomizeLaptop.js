import React, { Component } from 'react';
import Processor from './Processor';
import {features} from './Features';






class CustomizeLaptop extends Component {

     render() {



return (
	<div>
		<section>
			<h2>{this.props.title}</h2>
		</section>
		<section>
			<Processor features={features} />
		</section>
	</div>
    );
    
}


}


export default CustomizeLaptop



