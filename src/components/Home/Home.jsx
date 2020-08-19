import React from 'react';
import './Home.scss';
import Background from './knitting250px_@2X.png';

var sectionStyle = {
  top: '0',
  bottom: '0',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
};

function Home() {
  return (
    <>
      <div className="home">
        <section style={sectionStyle}> </section>
      </div>
    </>
  );
}

export default Home;
