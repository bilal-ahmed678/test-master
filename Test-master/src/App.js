import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from "./component/Header/Header";
import Slider from "./component/Header/Slider.js"
import Routes from './header.js/routes'

import Footer from "./component/Footer/footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      {/* <Slider/>
      <Cards/>
      <Card2/>
      <Card3/> */}
      <Footer/>
    </div>
  );
}

export default App;