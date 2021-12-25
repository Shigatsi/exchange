//проверки ответа сервера и преобразование из json
const checkRes = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
//87e63b50-657c-11ec-ae7d-fd28d5ba7e73
const getLatest = (baseCurrensy) => {
  return fetch(`https://freecurrencyapi.net/api/v2/latest?apikey=87e63b50-657c-11ec-ae7d-fd28d5ba7e73&base_currency=${baseCurrensy}`, {
    mode: "cors",
    dataType: "json",
    method: "GET",
  })
    .then(checkRes)
    .then((res) => {
      console.log(res)
      return res;
    })

    .catch((err) => {
      console.log(err);
    });
};

export { getLatest };
