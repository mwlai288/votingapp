import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
import MainLayout from './MainLayout';
import About from './pages/About';

Meteor.startup(() => {
  render(
    <Router>
      <div>
        <div>
          <MainLayout />
        </div>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </Router>,
    document.getElementById('render-target')
  );
});
