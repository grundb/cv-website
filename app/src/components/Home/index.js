
import React from 'react';
import './index.css'

const Home = () =>  {
  return (
    <div className="homeContainer">
      <div className="bgImage" />
      <div className="bgBottom" />
      <div className="presentationBox">
        <div className="bigName">Johan Grundberg</div>
        <img 
          src="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12439426_1171317892880282_8422294396178317906_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=yDAOj2gvCgQAX9AsQ_a&_nc_ht=scontent-arn2-1.xx&oh=8a696248b972e93c8c124f5aff2d5878&oe=5EB17B76"
          className="bigPicture"
          alt="Me"
        />
        <div 
          className="linkBox"
        >
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
          <div>Link 4</div>
          <div>Link 5</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
