import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Content extends React.Component {
   constructor(props) {
      super(props);
      this.state = {toggleNav: false};
    }


   render() {
      const active = this.props.isNav ? 'has-Nav' : '';
      const mobile = this.props.isMobile ? 'mobile' : '';
      const ContentClass = `wrapper ${active} ${mobile}`;


      return (
         <section className={ContentClass}>
            <Header />
            <Footer />
         </section>
      )
   }
};

export default Content;