import React from 'react';
import { Grid, Image } from 'semantic-ui-react'


export default class Checkout extends React.Component{
    
    renderCheckout = () => { return this.props.cart.map(gear =>{

            return  <> 
            <Grid.Column>
                <Image src={gear.img_url}/>
            </Grid.Column>
            <Grid.Column>
                <h3>${gear.price}</h3>
            </Grid.Column>
            </>
        })
    }

        render() {
console.log(this.props)
            return (
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        {this.renderCheckout()}
                    </Grid.Row>
                </Grid>
            );
        }
}