import React from 'react';
import './Footer.scss';
import ReactGA from 'react-ga';

function Footer() {
  return (
      <footer id="footer">
        {/* < !--Copyright -- > */}
        <div className="footer-copyright text-center py-3">
          © Web Development by: 
          <ReactGA.OutboundLink
          eventLabel="vlad_hernandez_site"
          to="https://www.vladhernandez.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="developer_site"
        >
          {' Vlad Hernandez'}
        </ReactGA.OutboundLink>
        </div>
      </footer>
  );
}

export default Footer;