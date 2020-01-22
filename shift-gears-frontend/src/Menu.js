import React, { Component } from 'react'
import SearchBar from './Search'
import ShiftGearsLogo from '/Users/Jakarai/MOD-4-Project/ShiftGears2/shift-gears-frontend/src/shiftGearLogo.png'
import { Button, Header, Image, Modal, Menu, Segment } from 'semantic-ui-react'
import axios from 'axios'



export default class TopBarMenu extends Component {
  state = { activeItem: 'home',
            open: false,
            username: "",
            password: "",
            isLogInActive: false
  }


//   show = (dimmer) => () => this.setState({ dimmer, open: true })
//   close = () => this.setState({ open: false })

  handleOrderClick = (e, { name }) => this.setState({ activeItem: name })


  onChangeHandler = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
    fetch("http://localhost:3000/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
        isLogInActive: true
      })
    })
    .then(r => console.log(r))
  }
  
  logInHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
    fetch(`http://localhost:3000/users`)
      .then(res => res.json())
      .then(allUsers => {
        // console.log(allUsers)
      this.setState =  allUsers.find(function(user) {return user.username && user.password == this.state.username && this.state.password} )
    })
  }
  
  
  

  render() {
    const { activeItem, open, dimmer, username, password } = this.state
    

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Your Orders'
            active={activeItem === 'Your Orders'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Your Account'
            active={activeItem === 'Your Account'}
            onClick={this.handleItemClick}
          />
           <div>
        {/* <Button onClick={this.show(true)}>Default</Button> */}
        {/* <Button onClick={this.show('blurring')}>SignUp</Button> */}
        <Button onClick={this.show('blurring')}>LogIn/SignUp</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Please Log In Here</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size='medium'
              src={ShiftGearsLogo}
            />
            <Modal.Description>
              <Header>Enter Log-In</Header>
              <form onSubmit= {this.submitHandler}>
                  <ul>
                      <li>
                          <label htmlFor="username"> Username:</label>
                          <input type="text"
                                 name="username"
                                 placeholder="Type username here"
                                 value={username}
                                 onChange= {this.onChangeHandler} 
                                  />
                      </li>
                      
                      <li>
                          <label htmlFor="password"> Password:</label>
                          <input type="text"
                                 name="password" 
                                 placeholder="Type password here"
                                 value={password}
                                 onChange= {this.onChangeHandler} 
                                  />
                      </li>
                      <li>
                          <button type="submit"> Submit </button>
                      </li>
                  </ul>
              </form>
              
//             </Modal.Description>
//           </Modal.Content>
//         </Modal>
//       </div>

          <SearchBar />
        </Menu>
      </Segment>
    )
  }
}
