import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Home from './pages/Home';
import './App.css'
import About from './pages/About';
import Cart from './pages/Cart';


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      <Route exact path="/" component={Home}/>
      <Route  path="/about" component={About}/>
      <Route  path="/cart" component={Cart}/>
    </div>
    </Router>
  );
}

export default App;
