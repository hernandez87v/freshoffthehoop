import ReactGA from 'react-ga';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import About from './components/About/About';
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
          <Route path="/About" exact component={About} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
