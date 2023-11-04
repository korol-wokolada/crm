import React from "react";

import "./App.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
