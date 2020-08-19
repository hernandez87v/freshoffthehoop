import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
// import Gallery from './components/Gallery/Gallery';
// import Soundcloud from './components/Soundcloud/Soundcloud';
// import Mixcloud from './components/Mixcloud/Mixcloud';
// import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

function App() {
  // ----- Google Analytics ------
  useEffect(() => {
    ReactGA.initialize('placeholder');
    //Reports page views
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/Gallery" exact component={Gallery} />
          <Route path="/Soundcloud" exact component={Soundcloud} />
          <Route path="/Mixcloud" exact component={Mixcloud} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
