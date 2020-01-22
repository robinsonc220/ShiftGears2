import React from 'react';
import 'semantic-ui-css/semantic.min.css'
// import logo from './logo.svg';
// import './App.css';
import GearContainer from '../src/GearContainer'
// import HeaderContainer from '../src/HeaderContainer'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Checkout from "../src/Checkout"



export default class App extends React.Component {

state = { 
  cart: []
}

  render() {
    
    return (
      <div className="App">
        {/* <HeaderContainer/> */}
        {/* <GearContainer cart={this.state.cart}/> */}
        
        <Router>
          <Route path="/" exact component={GearContainer} />
          <Route path="/checkout" exact component={Checkout} />
        </Router>
    
      </div>
        
    );
  }
}


