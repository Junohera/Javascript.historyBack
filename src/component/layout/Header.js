import React from 'react';

class Header extends React.Component {
   // constructor(props) {
   //    super(props);
   //    this.state = {toggleNav: false};
   //  }


   render() {
      // const active = this.state.toggleNav ? 'active' : null;
      // const dashboardClass = `float_dashboard ${active}`;

      return (
         <section className="header">
            <h5>
            New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!
            </h5>            
         </section>
      )
   }
};

export default Header;