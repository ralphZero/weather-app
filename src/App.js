import React from "react";
import Container from "./components/Container";
import WeatherContextProvider from "./contexts/WeatherContext";
import UnitContextProvider from './contexts/UnitContext';

const App = () => {
  return (
    <div className='App'>
      <WeatherContextProvider>
        <UnitContextProvider>
          <Container />
        </UnitContextProvider>
      </WeatherContextProvider> 
    </div>
  );
}

export default App;
