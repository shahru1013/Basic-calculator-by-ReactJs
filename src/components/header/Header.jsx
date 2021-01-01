import React, { Component } from 'react';
import './header.css';
import logo from '../../logo.svg';
export class Header extends Component {
 
   render() {
        return (
            <div className="header">
               <div className="left">
                  <img src={logo}></img>
                  <button>Home</button>
                  <button>Calculator</button>
               </div>
            </div>
        )
    }
}

export default Header
