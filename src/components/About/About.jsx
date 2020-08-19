import React from 'react';
import './About.scss';
import Background from '../Home/stitched_wool_@2X.png';

var sectionStyle = {
  top: '0',
  bottom: '0',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
};

function About() {
  return (
    <div className="about">
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sed
        corrupti, accusamus dolore dolores, quaerat beatae minus numquam
        incidunt veniam, sint praesentium! Qui, cumque excepturi culpa
        exercitationem cupiditate repellendus molestias!
      </h2>
      <section style={sectionStyle}> </section>
    </div>
  );
}

export default About;
