import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Checkout from '../src/Checkout'
import * as serviceWorker from './serviceWorker';



// const routing = (
//     <Router>
//       <div>
//         <Route path="/" exact component={App} />
//         <Route path="/checkout" component={Checkout} />
//       </div>
//     </Router>
//   )

ReactDOM.render(<App/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
