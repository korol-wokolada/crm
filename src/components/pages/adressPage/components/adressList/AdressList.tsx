import React from "react";
import Loader from "../../../../loaderIcon/Loader";

import "./style.css";
import { SuggestionType } from "../../../../../api/apiTypes";

export type AdressListProps = {
  isLoading: boolean;
  adress: Array<SuggestionType> | undefined;
};

export default function AdressTable({ isLoading, adress }: AdressListProps) {
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="adressPage-table">
          <h2 className="adreessPage-table-caption">Адреса</h2>

          {adress?.length
            ? adress.map(({ value, unrestricted_value }, index) => (
                <div className="adressPage-table-adress" key={index}>
                  <a
                    href={`mailto:${unrestricted_value}`}
                    className="adressPage-table-adress-link">
                    {value
                      ?.replace(/г /g, " город ")
                      .replace(/ пр-кт /g, " проспект ")
                      .replace(/ ул /g, " улица ")
                      .replace(/ д /g, " дом ")
                      .replace(/пл/g, "площадь")}
                  </a>
                </div>
              ))
            : "Извините, но поиск не дал результатов"}
        </div>
      )}
    </>
  );
}
