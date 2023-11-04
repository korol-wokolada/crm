import React, { useCallback, useState } from "react";
import "./adressPage.css";
import AdressPageSearch from "./components/adressPageSearch/AdressPageSearch";
import { getAdressRequest } from "../../../api/adressApi";
import { AdressSugestions } from "../../../api/apiTypes";
import LoaderIcon from "../../loaderIcon/LoaderIcon";

export default function AdressPage() {
  const [adress, setAdress] = useState<AdressSugestions | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  console.log(adress, loading);

  const handlerButtonClick = useCallback(async (value: string) => {
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
  }, []);

  return (
    <div className="AdressPage-wrapper">
      <h1 className="AdressPage-caption">Поиск адресов</h1>
      <p className="AdressPage-clue">Введите интересующий вас адрес</p>
      <AdressPageSearch onSearchRequestsClick={handlerButtonClick} />
      {loading ? (
        <LoaderIcon />
      ) : (
        adress && (
          <div className="AdressPage-table">
            <h2 className="AdreessPage-table-caption">Адреса</h2>
            {adress.suggestions.length
              ? adress.suggestions.map(
                  ({ value, unrestricted_value }, index) => (
                    <div className="AdressPage-table-adress" key={index}>
                      <a
                        href={`mailto:${unrestricted_value}`}
                        className="AdressPage-table-adress-link">
                        {value
                          ?.replace(/г /g, " город ")
                          .replace(/ пр-кт /g, " проспект ")
                          .replace(/ ул /g, " улица ")
                          .replace(/ д /g, " дом ")
                          .replace(/пл/g, "площадь")}
                      </a>
                    </div>
                  )
                )
              : "Извините, но поиск не дал результатов"}
          </div>
        )
      )}
    </div>
  );
}
