import React from 'react';
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreationsPage from './components/CreationsPage';import ContactPage from './components/ContactPage';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export const MyContext = React.createContext(gsap)
gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

function App() {

  return (
    <>
    <MyContext.Provider value={gsap}>
      <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/creations' component={CreationsPage} />
            <Route path='/contact' component={ContactPage}/>
          </Switch>
        </Router>
    </MyContext.Provider>
    </>
  );
}

export default App;
