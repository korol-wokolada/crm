import React from "react";

import "./style.css";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/mainContent/MainContent";

function App() {
  return (
    <div className="app">
      <Header />

      <Sidebar />

      <MainContent />
    </div>
  );
}

export default App;
