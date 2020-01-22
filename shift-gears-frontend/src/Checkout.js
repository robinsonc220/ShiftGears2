import React from 'react';
import { Button, Icon, Image, Table, Header } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';


export default class Checkout extends React.Component{
    
    renderCheckout = () => { return this.props.cart.map(gear =>{

            return  <> 
            <Table.Row>
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
            </>
        })
    }

        render() {
// console.log(this.props)
            return (
            <center>
            <h2 class="ui icon header">
            <i class="credit card outline icon"></i>
            <div class="content">
            Your Order
            </div>
            </h2>
          <Table basic='very' celled collapsing>
            <Table.Body>
              {this.renderCheckout()}
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
          <NavLink to="/"><Button animated='fade'>
      <Button.Content visible>Confirm Order</Button.Content>
      <Button.Content hidden>
        <Icon name='check circle' />
      </Button.Content>
    </Button></NavLink>
        </center>
            );
        }
}