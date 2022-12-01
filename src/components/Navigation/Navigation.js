import React from 'react';
import './Navigation.css';
import Tilt from 'react-parallax-tilt';

const Navigation = ({ onRouteChange, isSignedIn }) => {
      if (isSignedIn) {
        return (
          /*In objects, use camelCase in place of dashes (-)*/
          <nav style={{display: 'flex', justifyContent: 'flex-end', padding: '15px'}}>
              <Tilt className="Tilt br3 dim shadow-2">
              <p onClick={() => onRouteChange('signout')} className='f5 b black underline pa2 pointer'>Sign Out</p>
              </Tilt>
          </nav>
        );
      } else {
        return (
          <nav style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <div>
              <Tilt className="Tilt br3 dim shadow-2">
                  <p onClick={() => onRouteChange('signin')} className='f5 b black underline pa2 pointer'>Sign In</p>
              </Tilt>
            </div>
          
            <div>
                <Tilt className="Tilt br3 dim shadow-2">
                  <p onClick={() => onRouteChange('register')} className='f5 b black underline pa2 pointer'>Register</p>
              </Tilt>
            </div>
          </nav>
        );
      }
}

export default Navigation;