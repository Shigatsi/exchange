import { BASE_URL } from "./const";

//проверки ответа сервера и преобразование из json
const checkRes = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

const getLatest = (baseCurrensy) => {
  return fetch(
    `${BASE_URL}latest?apikey=87e63b50-657c-11ec-ae7d-fd28d5ba7e73&base_currency=${baseCurrensy}`,
    {
      mode: "cors",
      dataType: "json",
      method: "GET",
    }
  )
    .then(checkRes)
    .then((res) => {
      return res;
    })

    .catch((err) => {
      console.log(err);
    });
};

export { getLatest };
