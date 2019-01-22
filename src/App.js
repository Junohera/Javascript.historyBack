import React, {
  Component,
  Fragment
} from 'react';

import Nav from './component/Nav';
import Wrapper from './component/Wrapper';

//util
import Util from './common/util';

//scroll
import scroll from './common/scroll';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNav: true,
      isMobile: Util.isMobile()
    };
  }

  scrollCheck = () => {
    this.setState({
      isNav: scroll.isRemove()
    })
  }
  
  componentDidMount() {
    window.addEventListener('scroll', this.scrollCheck);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', scroll.removeEvent);
  }

  scrollCheck = () => {
    this.setState({
      isNav: scroll.isRemove()
    })
  }

  render() {
    return ( 
      <Fragment >
        <Nav isNav={this.state.isNav}/> 
        <Wrapper isMobile={this.state.isMobile}/>
      </Fragment> 
    );
  }
}

export default App;