import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Skills} from "./components/skils/Skills";
import {MyProjects} from "./components/myProjects/MyProjects";
import {Contacts} from "./components/contakts/Contacts";
import {Footer} from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <MyProjects />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
