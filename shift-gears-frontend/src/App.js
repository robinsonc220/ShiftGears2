import React from 'react';
import 'semantic-ui-css/semantic.min.css'
// import logo from './logo.svg';
// import './App.css';
import GearContainer from '../src/GearContainer'
// import HeaderContainer from '../src/HeaderContainer'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Checkout from "../src/Checkout"
import Gear from '../src/Gear';
import { Table, Image, Header, Grid } from 'semantic-ui-react'





export default class App extends React.Component {

  state = {
    allGear: [],
    cart: [],
    total: 0
}

componentDidMount() {
  fetch('http://localhost:3000/gears')
  .then(response => response.json())
  .then(data => this.setState({ allGear: data }));
}

// renderAllGear = () => { return this.state.allGear.map(gear => {
//   return  <div class="four wide column"> <Gear cart={this.props.cart} total={this.state.total} gear={gear} addToCart={this.addToCart} renderCart={this.renderCart} renderCheckout={this.renderCheckout}/>  </div>
//       }) 
//   }  

addToCart = (gear) => {
  let cartCopy = [...this.state.cart, gear]
  this.setState({cart: cartCopy})
  this.setState({total: this.state.total += gear.price}) 
  
}

renderCart = () => { return this.state.cart.map(gear =>{

  return   <Table.Row>
      <Table.Cell>
        <Header as='h4' image>
          <Image src={gear.img_url} />
          <Header.Content>
              {gear.name}
              <Header.Subheader>Sz. {gear.size}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>${gear.price}</Table.Cell>
    </Table.Row>
  })
}

  render() {
    
    return (
      <div className="App">
        {/* <HeaderContainer/> */}
        {/* <GearContainer cart={this.state.cart}/> */}
        
        <Router>
          <Route path="/" exact render={(props) => <GearContainer {...props} renderAllGear={this.renderAllGear} renderCart={this.renderCart} addToCart={this.addToCart} cart={this.state.cart} allGear={this.state.allGear} total={this.state.total} />} />
          <Route path="/checkout" exact render={(props) => <Checkout {...props} cart={this.state.cart} total={this.state.total}/>} />
        </Router>
    
      </div>
        
    );
  }
}


