import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import RiverApp from './RiverApp';
import SelectedRivers from './SelectedRivers';
import './index.css';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Match exactly pattern="/" component={RiverApp} />
          <Match pattern="/s" component={(props) => <SelectedRivers {...props} />} />
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(
<App />,
  document.getElementById('root')
);
