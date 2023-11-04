import React from "react";
import "./style.css";
import NewsCreateor from "./components/news-creator-component/NewsCreateor";

export default function MainPage() {
  return (
    <div className="mainPage-wrapper">
      <NewsCreateor />
    </div>
  );
}
