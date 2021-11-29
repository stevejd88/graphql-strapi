import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'gestalt/dist/gestalt.css';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup'
import Checkout from './components/Checkout/Checkout ';
import Navbar from './components/Navbar/Navbar';

const Root = () => (
  <Router>
    <React.Fragment>
    <Navbar />
    <Switch>
      <Route component={App} exact path='/' />
      <Route component={Signin} path='/signin' />
      <Route component={Signup} path='/signup' />
      <Route component={Checkout} path='/checkout' />
    </Switch>
    </React.Fragment>
    
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
