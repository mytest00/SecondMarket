import React from 'react';
import './App.css';
import SideNavbar from './components/SideNavbar';
import TopNavBar from './components/TopNavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import Electronics from './pages/Electronics';
import Game from './pages/Game';
import Furniture from './pages/Furniture';
import Sport from './pages/Sport';
import About from './pages/About';
import Contact from './pages/Contact';
import Search from './pages/Search';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Router>
        <TopNavBar />
        <SideNavbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/search" component={Search} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
          <Route path="/messages" component={Messages} />
          <Route path="/electronics" component={Electronics} />
          <Route path="/game" component={Game} />
          <Route path="/furniture" component={Furniture} />
          <Route path="/sport" component={Sport} />
        </Switch>
      </Router>
    </>
  );
}

export default App;