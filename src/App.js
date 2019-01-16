import React, { Component, Fragment } from 'react';
import Nav from './component/layout/Nav';
import Content from './component/layout/Content';
import Footer from './component/layout/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNav: true
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.isNav && <Nav />}
        <Content isNav={this.state.isNav}/>
        <Footer/>
      </Fragment> 
    );
  }
}

export default App;