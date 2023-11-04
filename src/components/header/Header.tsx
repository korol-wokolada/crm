import React from "react";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-icon"></div>

        <p className="logo-name">Wrench CRM</p>
      </div>

      <div className="user-wrapper">
        <div className="user-icon"></div>

        <p className="user-name">Имя Фамилия</p>
      </div>
    </header>
  );
}
