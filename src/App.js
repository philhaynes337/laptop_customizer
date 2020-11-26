import React, { Component } from 'react';
import CustomizeLaptop from './files/CustomizeLaptop';
import Cart from './files/Cart';
import {features} from './files/Features';
import './files/Pick.css';


import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values

class App2 extends Component {


render() {


  return (


    <div className='Laptop'>   
    <CustomizeLaptop features={features} title='Customize your laptop' /> 

    <Cart features={features} title='Your cart' />


    </div>
    )


  }

}


export default App2;
