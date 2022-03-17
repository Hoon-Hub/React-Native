import axios from "axios";

const API_KEY = "91bdeb82b3a74b04b7971dae7d16570a";

export default axios.create({
  baseURL: `https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?KEY=${API_KEY}&Type=json&`,
});
