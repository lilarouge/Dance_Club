import React, {useContext} from 'react';
import { Link} from "react-router-dom";
import "./NavigationBarCSS.css";
import {userContext} from '../../Context';


class NavigationBar extends React.Component {
  render () {
    const{user,setUser}=this.context;
    return(
      <div>
        {user? (
          <div className='NavigationBar'>

          <h2 className= "titleNavigation">Dancers inclusive</h2>
                    <nav className="nav1">
                    <ul className="nav2">
                      <li><Link to='/profile' className="nav-link">Profile</Link></li>
                      <li><Link to='/audition' className="nav-link">Audition</Link></li>
                      <li><Link to='/artisticInspirations' className="nav-link">Artistic Inspiration</Link></li>
                      <li><Link to='/juridicalQuestions' className="nav-link">Juridical Question</Link></li>
                      
                    </ul>
                    </nav>
                 <hr />
          </div>
           ):(<div> </div>)}
      </div>

    );
  }
}


NavigationBar.contextType= userContext;
export default NavigationBar;