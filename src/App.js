import React, { Component, Fragment } from 'react';
import Nav from './component/layout/Nav';
import Header from './component/layout/Header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Header />
      </Fragment> 
    );
  }
}

export default App;