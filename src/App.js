import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import RiverList from './RiverList';
import RiverDetail from './RiverDetail';
import RiverApp from './RiverApp';
import SelectedRivers from './SelectedRivers';
import './App.css';

// import RiverList from './Rivers';

const App = () => {
    return (
      <Router history={hashHistory}>
        <div className="App">
          <Route path="/" component={RiverApp} />
          <Route path="selected" name="selected" component={SelectedRivers} />
        </div>
      </Router>


    );
  }

export default App;
// {this.state.rivers.data.value.timeSeries[0].sourceInfo.siteName}

// responseJson.data.value.timeSeries
