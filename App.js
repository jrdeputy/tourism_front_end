import React, { Component } from 'react';
import EpicMenu from './pages/components/EpicMenu.js';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import logo from './pages/components/Pictures/logo.png';

//Pages
import MainPage from './pages/index';
import NotFoundPage from './pages/404';
import AboutPage from './pages/about';
import ReviewPage from './pages/review';

class App extends Component {

render() {
  let links = [
    { label: 'Home', link: '/', active: true},
    { label: 'About', link: '/about'},
    { label: 'Review', link: '/review'},
    { label: 'Sign Up', link: '/sign up'},
    { label: 'Log In', link: '/log in'},
  ]
  return (
    <React.Fragment className="container center">
      <EpicMenu links={links} logo={logo}/>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/review" component={ReviewPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </React.Fragment>
    );
  }
}
export default App;
