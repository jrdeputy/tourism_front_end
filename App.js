import React, { Component } from 'react';
import EpicMenu from './EpicMenu.js';

import logo from './logo.png';

class App extends Component {

render() {
  let links = [
    { label: 'Home', link: '#home', active: true},
    { label: 'About', link: '#about'},
    { label: 'Review', link: '#contact'},
    { label: 'Sign Up', link: '#sign up'},
    { label: 'Log In', link: '#log in'},
  ]
  return (
    <div className="container center">
      <EpicMenu links={links} logo={logo}/>
    </div>
    );
  }
}
export default App;
