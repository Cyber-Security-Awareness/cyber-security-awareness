import { Button } from 'antd';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DefaultLayout from './layout/DefaultLayout';
import HomePage from './pages/HomePage';
import NewsBrowsingPage from './pages/news/NewsBrowsingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';

function App() {

  return (
    <div className="App">
      <Router>
        <DefaultLayout>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route exact path="/news">
              <NewsBrowsingPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <RegisterPage />
            </Route>
          </Switch>
        </DefaultLayout>
      </Router>
    </div>
  );
}

export default App;
