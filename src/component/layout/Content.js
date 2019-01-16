import React from 'react';
import Header from './Header';

class Content extends React.Component {
   constructor(props) {
      super(props);
      this.state = {toggleNav: false};
    }


   render() {
      const active = this.props.isNav ? 'has-Nav' : '';
      const ContentClass = `wrapper ${active}`;

      return (
         <section className={ContentClass}>
            <Header />
            <Header />
            <Header />
            <Header />
         </section>
      )
   }
};

export default Content;