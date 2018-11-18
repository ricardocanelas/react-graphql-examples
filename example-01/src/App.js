import React, { Component } from 'react';
import Profile from './components/Profile'
import RepositoryList from './components/RepositoryList'

import "./style.css";

class App extends Component {
   render() {
      return (
         <div className="App">
            <h1>Github</h1>
            <Profile />
            <hr />
            <RepositoryList />
         </div>
      );
   }
}

export default App;
