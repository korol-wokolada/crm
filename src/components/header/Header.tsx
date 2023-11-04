import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <div className="Logo-icon"></div>
        <p className="Logo-name">Wrench CRM</p>
      </div>

      <div className="User-wrapper">
        <div className="User-icon"></div>
        <p className="User-name">Имя Фамилия</p>
      </div>
    </header>
  );
}
