const fetch = require("node-fetch");

const baseUrl = "http://apis.data.go.kr/6260000/";

const serviceKey =
  "czjc%2FLiXADgQwbo%2BD7wPVIDHrQsrdTly%2FtPY1ISDPgq1b4XfyXD4WryP5J6TNaEsZF9d%2F0%2F10Cto7gia8HcDnA%3D%3D";

const option = "numOfRows=30&pageNo=1&resultType=json";

const url = (urlName) => {
  return baseUrl + `${urlName}?ServiceKey=${serviceKey}&${option}`;
};

export const foodList = () =>
  fetch(url("FoodService/getFoodKr")).then((res) => res.json());
