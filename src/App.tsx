import React from 'react';
import { Cryptocurrency } from './features/cryptocurrency/Cryptocurrency';
import {PrimarySearchAppBar} from './features/navbar/Navbar';
import { Easytable } from './shared/easytable/Easytable';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <Cryptocurrency></Cryptocurrency>
    </div>
  );
}

export default App;
