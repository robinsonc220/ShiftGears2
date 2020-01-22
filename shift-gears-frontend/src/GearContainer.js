import React from 'react';

import Gear from '../src/Gear';
import { Table, Image, Header, Grid } from 'semantic-ui-react'

export default class GearContainer extends React.Component{

renderAllGear = () => { return this.props.allGear.map(gear => {
  return  <div class="four wide column"> <Gear cart={this.props.cart} total={this.props.total} gear={gear} addToCart={this.props.addToCart} renderCart={this.props.renderCart} renderCheckout={this.props.renderCheckout}/>  </div>
      }) 
  }      
    
render() {
    console.log(this.props.cart)

    return (
        <div class="ui container">
            <div class="ui equal width grid">
                {this.renderAllGear()}
            </div>
        </div>
        );
     }
  }


