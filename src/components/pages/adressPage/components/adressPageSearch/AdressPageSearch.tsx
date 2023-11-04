import React, { ChangeEvent, FormEvent, useState } from "react";
import "./adressPageSearch.css";

export type AdressPageSearchProps = {
  onSearchRequestsClick: (value: string, event: FormEvent) => void;
};

export default function AdressPageSearch({
  onSearchRequestsClick,
}: AdressPageSearchProps) {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <form
      className="adressPage-search-block"
      onSubmit={(event) => onSearchRequestsClick(searchText, event)}>
      <input
        className="adressPage-search-input"
        type="text"
        value={searchText}
        onChange={handleInputChange}
        placeholder="Введите текст для поиска"></input>

      <button className="adressPage-search-button" type="submit">
        <span className="search-button-icon"></span>

        <span className="serch-button-name">Поиск</span>
      </button>
    </form>
  );
}
