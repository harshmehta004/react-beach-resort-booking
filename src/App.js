import React from 'react';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import SingleRoom from './pages/SingleRoom';
import {Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route exact path="/rooms/" component={Rooms}></Route>
      <Route exact path="/rooms/:singli" component={SingleRoom}></Route>
      <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
