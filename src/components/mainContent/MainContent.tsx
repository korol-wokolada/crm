import React from "react";
import "./mainContent.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/mainPage/MainPage";
import AdressPage from "../pages/adressPage/AdressPage";

export default function MainContent() {
  return (
    <main className="Main-content">
      <Routes>
        <Route path="*" element={<MainPage />} />
        <Route path="/adress" element={<AdressPage />} />
        {/* <Route path="*" element={<TablesPage />} />
        <Route path="*" element={<CalendarPage />} />
        <Route path="*" element={<MapPage />} />
        <Route path="*" element={<WidgetsPage />} />
        <Route path="*" element={<SettingProfilePage />} /> 
        <Route path="*" element={<SettingFinancePage />} />*/}
      </Routes>
    </main>
  );
}
