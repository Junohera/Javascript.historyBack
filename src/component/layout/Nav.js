import React from 'react';
import Icon from '../common/Icon';

class Navigation extends React.Component {
   constructor(props) {
      super(props);
      this.state = {toggleNav: false};
    }
    
    onClickToggle = () => {
       this.setState({
          toggleNav : !this.state.toggleNav
       })
    }

   render() {
      const active = this.state.toggleNav ? 'active' : null;
      const dashboardClass = `float_dashboard ${active}`;


      const dashboardList = [{
          index: 0,
          viewText: 'Vue',
          iconName: 'fa-vuejs',
          category: 'fab',
          style: {
             color:'#42b983'
          }
        }, {
          index: 1,
          viewText: 'Angular',
          iconName: 'fa-angular',
          category: 'fab',
          style: {
             color:'#db0e36'
          }
        }, {
          index: 2,
          viewText: 'React',
          iconName: 'fa-react',
          category: 'fab',
          style: {
            color:'#67DAF9'
         }
        }];
        
      const dashboardItems = dashboardList.map(v => 
         <li className="menuIcons" key={v.index.toString()}>
            <Icon category={v.category} name={v.iconName} style={v.style} />
            <span>{v.viewText}</span>
         </li>
      )

      return (
         <div className="navigation">

            <a className="title">Juno Gallery</a>

            <button onClick={this.onClickToggle} className="float_btn"> 
               {this.state.toggleNav ? <Icon name="fa-times" /> : <Icon name="fa-bars" />} 
            </button>

            <ul className={dashboardClass}>
               {dashboardItems}
            </ul>

         </div>
      )
   }
};

export default Navigation;