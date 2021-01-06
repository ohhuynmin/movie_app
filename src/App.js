import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import About from './routes/About'
import Search from './routes/Search';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';


function App() {
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Search}/>
    <Route path="/about" exact={true} component={About}/>
    <Route path="/movie-detail" exact={true} component={Detail}/>
  </HashRouter>
  );
}

export default App;
