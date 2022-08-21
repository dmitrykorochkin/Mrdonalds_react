import React from 'react';

import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';

 


export const App = () => {
  return (
    <div className="App">
      <GlobalStyle/>
      <NavBar/>
      <Menu/>
      
    </div>

  );
}


