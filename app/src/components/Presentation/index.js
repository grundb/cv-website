
import React from 'react';
import './index.css'
import Particles from 'react-particles-js';
import particlesConfig from '../../resources/particlesConfig';

import LINKEDIN_LOGO from '../../resources/linkedin.png';
import GITHUB_LOGO from '../../resources/github.png';
import LEETCODE_LOGO from '../../resources/leetcode.png';

const MAIL_LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Envelope_font_awesome.svg/512px-Envelope_font_awesome.svg.png";

const MY_INFO = `My name is Johan Grundberg and I am currently doing my
 fourth year of the combined BSc/MSc programme in Computer Science and 
 Engineering at KTH Royal Institute of Technology. I am almost always 
 looking for work opportunities in backend, fullstack or frontend development.
 My favorite technologies include Java, Python, Go, JavaScript, React and HTML/CSS. 
 If you want to know more about me, please use the links below.`

const LINKEDIN_ADDRESS = "https://www.linkedin.com/in/johan-grundberg-726a9913b/";
const GITHUB_ADDRESS = "https://github.com/grundb";
const MAIL_ADDRESS = "mailto:johan.grundberg98@gmail.com";
const LEETCODE_ADDRESS = "https://leetcode.com/user1937kl/";


const IconLink = ({ imgSource, linkDest }) => {
  return (
    <a href={linkDest} className="clickable" rel="noopener noreferrer" target="_blank">
      <img
        src={imgSource}
        className="linkImage"
      />
    </a>
  )
}

const Presentation = () => {
  return (
    <div className="presentationContainer">
      <Particles params={particlesConfig} className="particles"/>
      <div className="presentationBox">
        <div className="bigName">Johan Grundberg</div>
        <img
          //src={require('../../resources/johanfinal.gif')}
          src={require('../../resources/me.jpg')}
          className="bigPicture"
          alt="Me"
        />
        <div className="infoText">{MY_INFO}</div>
        <div
          className="linkBox"
        >
          <IconLink imgSource={LINKEDIN_LOGO} linkDest={LINKEDIN_ADDRESS} />
          <IconLink imgSource={GITHUB_LOGO} linkDest={GITHUB_ADDRESS} />
          <IconLink imgSource={LEETCODE_LOGO} linkDest={LEETCODE_ADDRESS} />
          <IconLink imgSource={MAIL_LOGO} linkDest={MAIL_ADDRESS} />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
