import React, { Component } from 'react';
import RiverList from './RiverList';
import RiverDetail from './RiverDetail';
import SelectedRivers from './SelectedRivers';
import sampleRivers from './rivers';
import base from './base';
import './App.css';


class RiverApp extends Component {
  constructor() {
    super();

    this.showRivers = this.showRivers.bind(this);
    this.hideRivers = this.hideRivers.bind(this);
    this.removeRiver = this.removeRiver.bind(this);
    this.addRiver = this.addRiver.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.authenticate = this.authenticate.bind(this);
    this.logout = this.logout.bind(this);
    this.authHandler = this.authHandler.bind(this);

    this.state = {
      rivers: sampleRivers,
      selectedRiver: null,
      selectedRivers: [],
      uid: null,
      owner: null,
      displayRivers: true
    };
  }


    componentDidMount() {
      base.onAuth((user) => {
        if(user) {
          this.authHandler(null, { user });
          this.setState({
            displayRivers: false
          })
        }
      });
    }


    authenticate(provider) {
      base.authWithOAuthPopup(provider, this.authHandler);
    }

    logout() {
      base.unauth();
      this.setState({ uid: null });
    }

    authHandler(err, authData) {
      if (err) {
        console.error(err);
        return;
      }

    //grab the store info
    const userDB = base.database().ref(this.uid);

    // query the firebas once for the store datab
    userDB.once('value', (snapshot) => {
      const data = snapshot.val() || {};

      //claim it as our own if there is no owner already
      if(!data.owner) {
        userDB.set({
          owner: authData.user.uid
        });
      }

      this.setState({
        uid: authData.user.uid,
        owner: data.owner || authData.user.uid
      });
    });
  }

    renderLogin() {
      return(
        <nav className="login">
          <h2>Paddle PDX</h2>
          <p>Sign in </p>
          <button className="facebook" onClick={() => this.authenticate('facebook')}>Log In with Facebook</button>
        </nav>
      )
    }

  componentWillMount() {
    // this runs right before the App is rendered
    this.ref = base.syncState(`SelectedRivers`,
      {
        context: this,
        state: 'selectedRivers',
        asArray: true
      });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

addRiver(favoriteRiver) {
  const riverNames = [];
  const selectedRivers = this.state.selectedRivers;
  selectedRivers.forEach(function (river) {
    riverNames.push(river.name);
  });
  if (!riverNames.includes(favoriteRiver.name)) {
    this.setState({ selectedRivers: this.state.selectedRivers.concat([favoriteRiver]) });
  }
}

removeRiver(i) {
  const selectedRivers = [...this.state.selectedRivers.slice(0, i), ...this.state.selectedRivers.slice(i + 1)];
  this.setState({selectedRivers});
}

hideRivers() {
  this.setState({
    displayRivers: false
  });
}

showRivers() {
  this.setState({
    displayRivers: true
  });
}

  render() {
    const logout = <button onClick={this.logout}>Log Out!</button>
    if(!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }

    return (
      <div className="App">
        {logout}
        <RiverList
          onRiverSelect={selectedRiver => this.setState({selectedRiver})}
          addRiver={this.addRiver}
          rivers={this.state.rivers}
          hideRivers={this.hideRivers}
          showRivers={this.showRivers}
          displayRivers={this.state.displayRivers}/>
        <SelectedRivers rivers={this.state.selectedRivers} removeRiver={this.removeRiver} />
        <RiverDetail river={this.state.selectedRiver} addRiver={this.addRiver}/>

      </div>

    );
  }
}

export default RiverApp;
