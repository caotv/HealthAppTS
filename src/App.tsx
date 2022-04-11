import React from 'react';
import MainRouter from './MainRouter';
import "./index.css";
import IGlobalContextInterface, { AppCtx } from './context/GlobalContext';
import { initValue } from './context/InitialStates';


function App() {
  return (
    <AppCtx.Provider value={initValue}>
      <MainRouter />
    </AppCtx.Provider>);
}

export default App;
