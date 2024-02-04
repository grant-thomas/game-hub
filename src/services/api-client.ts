import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "55a4c1348a4b4d9c9ace993ef03e7d83"
  }
})