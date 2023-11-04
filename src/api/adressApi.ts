import { AdressSugestions } from "./apiTypes";

export async function getAdressRequest(
  query: string
): Promise<AdressSugestions | undefined> {
  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const token = "0785d0179eda6f4572374c4470d2cd99ffef5fe8";

  const options: RequestInit = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query: query, count: 20 }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Ошибка HTTP: " + response.status);
    }
    const result = await response.text();
    return JSON.parse(result);
  } catch (error) {
    alert(`Произошла ошибка: ${error}`);
    return undefined;
  }
}
