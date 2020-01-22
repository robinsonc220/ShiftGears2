import React, { Component } from 'react'
import { Button, Modal, Table, Header } from 'semantic-ui-react'
import Checkout from '../src/Checkout'
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'

export default class Cart extends Component {

  state = { 
    open: false
  }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })


  render() {

    const { open } = this.state

    return (
      <Modal
      open={open}
      onOpen={this.open}
      onClose={this.close}
      size='mini'
      trigger={
      <Button
      positive
      icon='checkmark'
      labelPosition='right'
      content="Add to Cart"
      onClick={() => this.props.addToCart(this.props.gear) }></Button>}>
        <Modal.Header>Your Cart</Modal.Header>
        <center>
          <Table basic='very' celled collapsing>
            <Table.Body>
              {this.props.renderCart()}
              <Table.Row>
                <Table.Cell>
                  <Header as='h4'>
                    <Header.Content>
                      Total
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                  ${this.props.total}
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </center>
        <Modal.Actions>
          <NavLink to="/checkout"><Button icon='dollar sign' content='Checkout' /></NavLink>
          <Button icon='shop' content='Keep Shopping' onClick={this.close} /> 
        </Modal.Actions>
      </Modal>
    )
  }
}
