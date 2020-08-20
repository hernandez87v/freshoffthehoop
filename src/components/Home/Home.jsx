import React from 'react';
import './Home.scss';
import ReactGA from 'react-ga';
// import Background from './stitched_wool_@2X.png';

// var sectionStyle = {
//   top: '0',
//   bottom: '0',
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   backgroundImage: `url(${Background})`,
//   backgroundPosition: 'center',
// };

function Home() {
  return (
    <div className="home">
      {/* <section style={sectionStyle}> </section> */}
      <h1>Fresh Off The Hoop</h1>
      {/* <button>Shop Now!</button> */}
      <ReactGA.OutboundLink
        eventLabel="Etsy_shop"
        to="https://www.etsy.com/ca/shop/FreshOffTheHoopCA"
        target="_blank"
        rel="noopener noreferrer"
        class="fa fa-etsy"
      >
        <button class="draw">Shop Now!</button>
      </ReactGA.OutboundLink>
    </div>
  );
}

export default Home;
