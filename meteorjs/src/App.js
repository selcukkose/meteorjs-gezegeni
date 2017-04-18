import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import MeteorImage from './images/meteor.png';
import MenuImage from './images/menu.png';
import Home from './Home/Home';
import IlkProgram from './Ilk Program/IlkProgram.js';

class App extends Component {

  render() {
    return (
      <div className="App">
          
          <div id="baslik">

               <div id="baslikVeAmblem">

                 <img src={MeteorImage} width="70" height="70"/>
                 <h1 id="baslikLabel">Meteor.js Gezgeni</h1>

               </div>
               
          </div>

                <Router>
                   <div id="main">
                       <ul id="sideBar">
                           <li><Link className="link" to="/">Meteor Nedir?</Link></li>
                           <li><Link className="link" to="/ilkprogramımız">İlk Programımız</Link></li>
                       </ul>
                      
                      <div id="route">
                         <Route exact path="/" component={Home}/>
                         <Route path="/ilkprogramımız" component={IlkProgram}/>
                      </div>
                   </div>
                </Router> 
      </div>
    );
  }
}

export default App;
