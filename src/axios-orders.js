import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-8a03e.firebaseio.com/"
});

export default instance;
