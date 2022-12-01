import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return (
      <div className="center">
        <div className='ma4 mt0'>
            <Tilt className="Tilt br3 shadow-2" style={{ width: '100px'}}>
                <div className="Tilt-inner pa3"><img className="pointer" style={{paddingTop: '5px'}}alt="logo" src={brain}/></div>
            </Tilt>
        </div>
      </div>
    );
};

export default Logo;