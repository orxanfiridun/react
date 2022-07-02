import './App.css';
import { Component } from 'react';
import Price from './component/Price/Price';
import Items from './component/Items/Items';

function App() {
  return (
    <div className="App">
      <Price/>
      <Items price="2.55"/>
    </div>
  );
}

export default App;     
