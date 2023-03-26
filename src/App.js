import React from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import Sevices from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';

import Contact from './components/Contact';
function App() {
  return (
<>
<Navbar />
<Home />
<Sevices />
<Portfolio />
<About />
<Team/>
<Contact/>
</>
  );
}

export default App;
