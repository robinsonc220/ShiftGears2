import React, { Component } from 'react'

export default class Login extends Component {

    
    render() {
        return (
            <div>
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
            </div>
        )
    }
}


