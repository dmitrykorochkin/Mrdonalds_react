import React from 'react';

import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';

 


export const App = () => {

  const [openItem, setOpenItem] = React.useState(null);
  console.log('Item', openItem);

  return (
    <div className="App">
      <GlobalStyle/>
      <NavBar/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem = {openItem} setOpenItem = {setOpenItem}/>
    </div>

  );
}


