import React, { FormEvent, useCallback, useState } from "react";
import "./style.css";
import AdressPageSearch from "./components/adressPageSearch/AdressPageSearch";
import { getAdressRequest } from "../../../api/adressApi";

import AdressList from "./components/adressList/AdressList";
import { AdressSugestionsType } from "../../../api/apiTypes";

export default function AdressPage() {
  const [adress, setAdress] = useState<AdressSugestionsType | undefined>(
    undefined
  );
  const [loading, setLoading] = useState(false);

  const handlerButtonClick = useCallback(
    async (value: string, event: FormEvent) => {
      event.preventDefault();

      if (value.length >= 3) {
        setLoading(true);
        try {
          const result = await getAdressRequest(value);
          setAdress(result);
        } catch (error) {
          console.log("Произошла ошибка:", error);
        } finally {
          setLoading(false);
        }
      } else {
        alert("Минимальное количество символов для поиска - 3");
      }
    },
    []
  );

  return (
    <div className="adressPage-wrapper">
      <h1 className="adressPage-caption">Поиск адресов</h1>

      <p className="adressPage-clue">Введите интересующий вас адрес</p>

      <AdressPageSearch onSearchRequestsClick={handlerButtonClick} />

      {adress && (
        <AdressList isLoading={loading} adress={adress?.suggestions} />
      )}
    </div>
  );
}
