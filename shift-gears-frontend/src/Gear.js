import React from 'react';
import { Card, Image, Button, Header, Modal } from 'semantic-ui-react'
// import styled from 'styled-components';
import Cart from '../src/Cart'



export default class Gear extends React.Component {

state = { 
    open: false
 }

show = (dimmer) => () => this.setState({ dimmer, open: true })
close = () => this.setState({ open: false })
  
    
    
render() {

const { open, dimmer } = this.state
// console.log(this.props)
return (
    <div>
        <Card className="gear" onClick={this.show('blurring')}>
        <Image src={this.props.gear.img_url} wrapped ui={false} />
        </Card>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header><h1>{this.props.gear.name}</h1></Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='large'
              src={this.props.gear.img_url}
            />
            <Modal.Description>
              <Header><h2>${this.props.gear.price}</h2></Header>
              <h4>
              Size: {this.props.gear.size}    
              </h4>
              <p>
              {this.props.gear.description}  
              </p>

            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Close
            </Button>
            <Cart cart={this.props.cart} total={this.props.total} gear={this.props.gear} addToCart={this.props.addToCart} renderCart={this.props.renderCart} renderCheckout={this.props.renderCheckout}/>
          </Modal.Actions>
        </Modal>

     
    
    
    
    
    
    
    
    </div>
    );
  }
}
  
  