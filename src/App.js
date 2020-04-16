import React from 'react';
import MainRoutes from './Routes/MainRoutes'
import './App.css';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MainRoutes />
      <Route exact path='/'>
        <Link to='/admin'> Admin</Link>
        <Link to='/airlinestaff'> Airlinestaff </Link>
      </Route>
    </div >
  );
}

export default App;
