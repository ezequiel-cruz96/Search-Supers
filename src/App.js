import React from 'react';
import Router from './components/Router/Router';
import AppContextProvider from './components/Context/Context';
import './App.css';



function App() {

  return (

    <div className="App">
      <AppContextProvider>
     
     <Router/>

     </AppContextProvider>

    </div>
       
  )
}

export default App;
