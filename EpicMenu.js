import React, { Component } from 'react';
import './EpicMenu.css';
import searchIcon from './Pictures/search-icon.png';

class EpicMenu extends Component {
    constructor() {
      super();

      this.state = {
        showForm: false
      }
    }

    showForm() {
      this.setState({
        showForm: !this.state.showForm
      })
    }

    render() {
        let searchForm = this.state.showForm ? (
          <form className="menu_search-form" method="POST">
            <input className="menu_search-input" placeholder="Type and hit enter" />
          </form>
        ) : '';

        let linksMarkup =  this.props.links.map((link, index) => {
          let linkMarkup = link.active ? (
            <a className="menu_link menu_link--active" href={link.link}>{link.label}</a>
          ) : (
            <a className="menu_link" href={link.link}>{link.label}</a>
          );
          return (
            <li key={index} className="menu_list-item">
              {linkMarkup}
            </li> 
          )
        });

        return (
            <div className="container center">
              <nav className="menu">
                <h1 style={{
                  backgroundImage: 'url(' + this.props.logo + ')'
                }}className="menu_logo">indigo</h1>
                
                    <div className="menu_right">
                      <ul className="menu_list">
                        {linksMarkup}
                      </ul>
             
                      <button onClick={this.showForm.bind(this)} style={{
                        backgroundImage: 'url(' + searchIcon + ')'
                      }}class="menu_search-button">Search</button>
        
                      {searchForm}
                    </div>
                </nav>
              </div>
            );
    }
}

export default EpicMenu;
