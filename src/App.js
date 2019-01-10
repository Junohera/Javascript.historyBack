import React, { Component, Fragment } from 'react';
import Nav from './component/layout/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
  }
  render() {
    return (
      <Fragment>
        <Nav prop="isToggleOn" />
      </Fragment> 
    );
  }
}

export default App;