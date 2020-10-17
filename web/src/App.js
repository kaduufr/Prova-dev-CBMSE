import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Routes from './routes';

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
