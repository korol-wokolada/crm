import React, { ChangeEvent, useState } from "react";
import "./adressPageSearch.css";

export type AdressPageSearchProps = {
  onSearchRequestsClick: (value: string) => void;
};

export default function AdressPageSearch({
  onSearchRequestsClick,
}: AdressPageSearchProps) {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="AdressPage-search-block">
      <input
        className="AdressPage-search-input"
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Введите текст для поиска"></input>
      <button
        className="AdressPage-search-button"
        onClick={() => onSearchRequestsClick(searchText)}>
        <span className="search-button-icon"></span>
        <span className="serch-button-name">Поиск</span>
      </button>
    </div>
  );
}
