import React from "react";
import ModalPanel from "./components/ModalPanel";
import SidePanel from "./components/SidePanel";
import ModalContextProvider from './contexts/ModalContext';

const App = () => {
  return (
    <div className='App'>
      <ModalContextProvider>
        <ModalPanel />
        <SidePanel />
      </ModalContextProvider>
    </div>
  );
}

export default App;
