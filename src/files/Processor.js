import React, { Component } from 'react';
import slugify from 'slugify';
import SectionProcessorItems from './SectionProcessorItems';
import FeatureOptions from './FeatureOptions';
import CartList from './CartList';
import CartListTotal from './CartListTotal';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class Processor extends Component {

  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };


 updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };


 render() {


  

const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
            <div>
              <SectionProcessorItems 
                ItemName={item.name} 
                ItemCost={USCurrencyFormat.format(item.cost)} 
                ItemHash={itemHash}
                InputName={slugify(feature)}
                InputChecked={item.name === this.state.selected[feature].name}
                InputOnChange={e => this.updateFeature(feature, item)}
              />
            </div>

        );
      });

      return (

        <div>
          <FeatureOptions 
            FeatureHash={featureHash}
            Feature={feature}
            Options={options}
          />


          </div>
   
      );

   });

 const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div>

        <CartList
          featureHash={featureHash}
          feature={feature}
          selectedOption={selectedOption.name}
          Cost={USCurrencyFormat.format(selectedOption.cost)}
         />
         </div>
      );
    });

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <>
        <main>
          <form className="main__form">
            
            {features}
          </form>
          <section className="main__summary">
            
            {summary}
            <CartListTotal 
              Label='Total'
              ListTotal={USCurrencyFormat.format(total)}
            />
     
          </section>
        </main>
      </>
    );

            

  }
}






export default Processor;