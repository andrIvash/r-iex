import React from "react";
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import ImagePage from './pages/ImagePage/ImagePage';

const sharedHistory = createBrowserHistory();

const App = () => (
  <Router history={sharedHistory}>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/image/:imageId" exact component={ImagePage} />
      <Route component={() => <h1 style={{ textAlign: 'center' }}>404</h1>} />
    </Switch>
  </Router>
);

export default App;
