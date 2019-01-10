import React, {Component} from 'react';

class Navigation extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isToggleOn: props.isToggleOn,
         slideCls: 'active'
      };
  
      this.clickFix = this.clickFix.bind(this);
    }

    clickFix() {
       this.setState(state => ({
          isToggleOn: !state.isToggleOn
       }));
    }

    navSlideMenu() {
       console.log(this.isToggleOn);
    }

    

   render() {
      return (
         <div style={navWrap}>

            <a style={navTitle}>Juno Gallery</a>

            <button style={navFix} onClick={this.clickFix}>
               Menu {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            <ul className={this.state.slideCls}>
               <li>Vue</li>
               <li>Angular</li>
               <li>React</li>
            </ul>

         </div>
      )
   }
};

const navWrap = {
   borderColor: 'rgba(34,34,34,.05)',
   backgroundColor: '#fff',
   transition: 'all .35s',
   fontFamily: 'Catamaran,Helvetica,Arial,sans-serif',
   fontWeight: 200,
   letterSpacing: '1px',
   padding: '6px 12px',
   height:'31px',
   lineHeight:'31px'
};

const navTitle = {
   textDecoration:'none',
   color:'black',
   textAlign:'center',
   display:'block'
}

const navFix = {
   position:'fixed',
   top:5,
   right:12,
   fontSize: '12px',
   padding: '8px 10px',
   color: '#222',
   cursor: 'pointer',
   borderColor: 'rgba(0,0,0,.1)',
   borderRadius: '.25rem',
   backgroundColor: '#fff'
}

export default Navigation;