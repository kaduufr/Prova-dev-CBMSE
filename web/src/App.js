import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import './App.css';

function App() {
  return (
    <div className="app has-background-white-ter">
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
