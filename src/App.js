import React, { useEffect } from 'react';
import './reset.css';
import './App.css';
import LandingPage from './component/landingPage.js';
import Home from './component/home.js';
import Lily from './component/Lily.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import sunshine from './songs/sunshine.mp3';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


function App() {
  useEffect(() => {
    var song = new Audio(sunshine);
    song.play();
  })


  return (
    <Router>
      <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={Home} />
      <Route path="/lily" component={Lily} />
      </div>
    </Router>
  );
}

export default App;
