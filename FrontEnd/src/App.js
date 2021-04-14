import React, {Component} from 'react';
import './App.css';

import {Login} from './components/Login';
import DrawerLeft from './components/DrawerLeft';

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginIn: false
    }
  }

  componentLogin() {
    this.setState({
      isLogginIn: localStorage.getItem("isLogginIn")
    })
  }


    render() {
        const LoginView = () => (
            <Login/>
        );

        const DrawerView = () => (
            <DrawerLeft/>
        );

        return (
            <Router>
                <div className="App">
                    <ul>
                      {!this.state.isLogginIn && (<li><Link to="/login">Login</Link></li>)}:{!this.state.isLogginIn && (<li><Link to="/drawer">Drawer</Link></li>)}
                    </ul>

                    <div>
                      {!this.state.isLogginIn && (<Route exact path="/login" component={LoginView} />)}:{!this.state.isLogginIn && (<Route exact path="/drawer" component={DrawerView} />)}
                    </div>
                </div>
            </Router>
        );
    }

    
    

}

export default App;

