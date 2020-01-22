// import React, { Component } from 'react'
// import SearchBar from './Search'
// import ShiftGearsLogo from '/Users/Jakarai/Documents/GitHub/shiftGear/shift_gears_frontend/src/shiftGearLogo.png'
// import { Button, Header, Image, Modal, Menu, Segment } from 'semantic-ui-react'



// export default class TopBarMenu extends Component {
//   state = { activeItem: 'home',
//             open: false,
//             username: "",
//             password: ""
//   }
//   // const signIn = { username: data, password}
// // componentDidMount() {
// //   fetch(URL, {
// //     method: 'POST',
// //     headers: {
// //       'Content-Type': 'application/json',
// //     },
// //     body:
// //   })
// //   .then(r => r.json())
// //   .then(data => {
// //     this.setStat
// //   })
// // }

//   show = (dimmer) => () => this.setState({ dimmer, open: true })
//   close = () => this.setState({ open: false })

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   handleLoginClick = () => {
      
//   }
//   onUserNameChange = (event) => {
//       this.setState({
//           username: event.target.value
//       })
//   }
//   onPasswordChange = (event) => {
//     this.setState({
//         password: event.target.value
//     })
// }
  
  

//   render() {
//     const { activeItem } = this.state
//     const { open, dimmer } = this.state

//     return (
//       <Segment inverted>
//         <Menu inverted secondary>
//           <Menu.Item
//             name='home'
//             active={activeItem === 'home'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='Your Gear'
//             active={activeItem === 'Your Gear'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='Login'
//             active={activeItem === 'Login'}
//             onClick={this.handleItemClick}
//           />
//            <div>
//         {/* <Button onClick={this.show(true)}>Default</Button> */}
//         <Button onClick={this.show('blurring')}>SignUp</Button>
//         <Button onClick={this.show('blurring')}>LogIn</Button>

//         <Modal dimmer={dimmer} open={open} onClose={this.close}>
//           <Modal.Header>Please Log In Here</Modal.Header>
//           <Modal.Content image>
//             <Image
//               wrapped
//               size='medium'
//               src={ShiftGearsLogo}
//             />
//             <Modal.Description>
//               <Header>Enter Log-In</Header>
//               <form>
//                   <ul>
//                       <li>
//                           <label htmlFor="username"> Username:</label>
//                           <input type="text"
//                                  placeholder="Type username here"
//                                  value={this.state.username}
//                                  onChange= {this.onUserNameChange} 
//                                  id="username" />
//                       </li>
//                       <li>
//                           <label htmlFor="password"> Password:</label>
//                           <input type="text"
//                                  placeholder="Type password here"
//                                  value={this.state.password}
//                                  onChange= {this.onPasswordChange} 
//                                  id="password" />
//                       </li>
//                       <li>
//                           <input type="submit"  />
//                       </li>
//                   </ul>
//               </form>
              
//             </Modal.Description>
//           </Modal.Content>
//         </Modal>
//       </div>

//           {/* <SearchBar /> */}
//         </Menu>
//       </Segment>
//     )
//   }
// }