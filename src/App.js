import React from 'react';
import NaviBar from './components/Navbar/Navbar';
import Landing from './components/Home/Index';
import Section1 from './components/about/index';
import Section2 from './components/project';
import Section3 from './components/code/';
import Section4 from './components/work';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <NaviBar/>
      <Landing/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default App;
