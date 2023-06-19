import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';

import Home from './Home';
import About from './About';
import Contact from './Contact';

ReactDOM.render(
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Router>,
  document.getElementById('root')
);
