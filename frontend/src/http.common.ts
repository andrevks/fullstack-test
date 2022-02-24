import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.18.128:3333/",
  headers: {
    "Content-type": "application/json",
  },
});
