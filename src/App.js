import React from 'react';

import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { GlobalStyle } from './components/GlobalStyle';
import { ModalItem } from './components/ModalItem';
import { Order } from './components/Order';

 


export const App = () => {

  const [openItem, setOpenItem] = React.useState(null);
  console.log('Item', openItem);

  return (
    <div className="App">
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu setOpenItem={setOpenItem}/>
      <ModalItem openItem = {openItem} setOpenItem = {setOpenItem}/>
    </div>

  );
}


