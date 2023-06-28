import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skils/Skills";
import {MyProjects} from "./components/myProjects/MyProjects";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <MyProjects />
    </div>
  );
}

export default App;
