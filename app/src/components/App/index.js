import React from 'react';
import './index.css';
import Presentation from '../Presentation';
import Particles from 'react-particles-js';
import particlesConfig from '../../resources/particlesConfig';

const App = () =>  {
  return (
    <div className="appContainer">
      <Particles params={particlesConfig} height="99vh" width="99vw"/>
      <Presentation/>
    </div>
  );
}

export default App;
